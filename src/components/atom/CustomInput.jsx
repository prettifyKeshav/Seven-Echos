import React from 'react'

const CustomInput = ({
  placeholder,
  inputType
}) => {
  return (
    <>
      <input type={inputType} placeholder={placeholder} />
    </>
  )
}

export default CustomInput