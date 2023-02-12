import React from 'react'

export default function FullName(props) {
  return (
    <div className='text-lg font-bold'>{props.firstName} {props.lastName}</div>
  )
}
