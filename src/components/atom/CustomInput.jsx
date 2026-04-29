import React from 'react'

const CustomInput = ({ isFull, ...item }) => {
  return (
    <>
      <div className={`form-group ${isFull ? "full" : ""}`}>
        <label htmlFor="">{item.formLabel}</label>
        <input type={item.inputType} placeholder={item.placeholder} />
      </div>
    </>
  )
}

export default CustomInput  