import '../assets/css/dashboard.css'
export default function Notify(){
  const card=[
    {
      title: 'Machine Learning',
      tutor: 'Arya',
      time: '23/07/2023'
    },
    {
      title: 'Data Structures',
      tutor: 'Sam',
      time: '18/07/2023'
    },
    {
      title: 'Java Script',
      tutor: 'Balaji',
      time: '18/07/2023'
    }
  ];
 

  return(
    <>
 <div className='part1' style={{width:'30%',float:'left',marginTop:40}}>
        <h3>Notifications</h3>
        <div className='card3'>
          {card.map((cardvar,index)=>(
            <div className='sub-card3' key={index}>

            <div className='sh-class-name'>
              <h4>{cardvar.tutor}</h4> <p> posted a new assignment on {cardvar.title}</p>
            <div className='sh-time'>
              <h5>Due date :</h5>
              <p>{cardvar.time}</p>
            </div>
            </div>
            </div>
          )
          )}

        </div>
        </div>
   
    </>
  );
}