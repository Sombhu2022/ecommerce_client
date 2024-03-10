import React from 'react'
import Input from './input/Input'

function InputTest() {
  return (
    <form style={{margin:"30px"}}>
        <Input name={"name"} placeholder={"name"} type={"text"}/>
    </form>
  )
}

export default InputTest