import PropTypes from 'prop-types';

class button{
  render(name) {
    return (
      <button name={name}></button>
    );
  }
}

botton.propTypes = {
  name: PropTypes.string.isRequired
};