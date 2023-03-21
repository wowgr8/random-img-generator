import React from 'react'

function InputBox({ label, setAttribute }) {
  return (
    <div >
      <label>{label}</label>
      <input onChange={(e) => setAttribute(e.target.value)}/>
    </div>
  )
}

export default InputBox