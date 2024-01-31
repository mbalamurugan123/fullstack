import AWS from 'aws-sdk';
import { useState } from 'react';
const S3Uploader =()=>{
    const [data,setdata]=useState(null);
    const config={
      bucketName: "bucket04901bala",
      dirName: 'user-profiles/',
      region: "ap-south-1",
      accessKeyId: "AKIATOKOCVPVLDR7P63B",
      secretAccessKey: "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"
    }
    const handleFileUpload=(event)=>{
        const file = event.target.files[0];

        if (!config.bucketName || !config.region || !config.accessKeyId || !config.secretAccessKey){
            console.error("AWS CONFIGURATION IS INCOMPLETE");
            return;
        }
        AWS.config.update({
            accessKeyId: config.accessKeyId,
            secretAccessKey: config.secretAccessKey,
            region: config.region
        })

        //Create new Instance
        const S3 =new AWS.S3();

        //Having file in array Buffer
        const reader=new FileReader();

        reader.onload =()=>{
            const fileBuffer = reader.result;
            S3.upload({
                Bucket: config.bucketName,
                Key: `${config.dirName}/${file.name}`,
                Body: fileBuffer,
                ACL: 'public-read',
                ContentType: 'image/png+xml'
            }, (err,uploadedData) => {
                if (err){
                    console.log(err);
                }
                else{
                    console.log(uploadedData);
                    setdata(uploadedData.Location);
                }
                 
            })
        }
        reader.readAsArrayBuffer(file);
    }
    return(
        <div>
            <input type="file" onChange={handleFileUpload}/>
            {data &&<img src={data} alt="uploaded Data"/>}
        </div>
    );
}
export default S3Uploader;