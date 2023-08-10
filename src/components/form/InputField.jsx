import PropTypes from 'prop-types';

function InputField({type, name, id, value, handleChange }) {
    return ( 
        <input type={type} name={name} id={id} value={value} onChange={handleChange} />
     );
}

InputField.propTypes = {
    type: PropTypes.string.isRequired,
    name:PropTypes.string.isRequired,
    value:PropTypes.string.isRequired,
    id:PropTypes.string.isRequired,
    handleChange:PropTypes.func.isRequired
  };

export default InputField;