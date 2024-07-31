import React from 'react'

const Button = ({btnTitle, btnClass, btnOnClick, btnType='button'}) => {
  return (
    <button className={`${btnClass}`} onClick={btnOnClick} type={btnType}>{btnTitle}</button>
  )
}

export default Button