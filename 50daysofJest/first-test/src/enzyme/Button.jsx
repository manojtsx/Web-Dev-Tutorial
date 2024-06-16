import React from 'react'

const Button = ({label, onClick}) => {
  return (
    <div onClick={onClick}>{label}</div>
  )
}

export default Button