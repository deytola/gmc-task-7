import React from 'react';
import PropTypes from 'prop-types';


export default function CustomInput({type, placeholder}) {
  return (
    <input className='rounded border-gray-300' type={type} placeholder={placeholder}/>
  )
}
CustomInput.defaultProps = {
    type: 'text',
    placeholder: ''
}

CustomInput.propTypes = {
    type: PropTypes.string,
    placeholder: PropTypes.oneOfType([
        PropTypes.number, 
        PropTypes.string
    ])

}
