import React from 'react';
import PropTypes from 'prop-types';

export default function Profile({fullName, bio, profession, handleName, children}) {
  return (
    <div className='flex items-center justify-center flex-col h-screen'>
        {handleName(fullName)}
        {children}
        <h2 className='text-lg font-bold'>{fullName}</h2>
        <h3 className='text-lg font-light'>{bio}</h3>
        <h4 className='text-lg font-medium'>{profession}</h4>
    </div>
  )
}

Profile.defaultProps = {
  fullName: 'AbdulJabar',
  bio: 'Correct guy',
  profession: 'F1 Driver'
}


Profile.propTypes = {
  fullName: PropTypes.string,
  bio: PropTypes.string,
  profession: PropTypes.string,
  handleName: PropTypes.func
}
