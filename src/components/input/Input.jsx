import React, { useEffect, useState } from "react";
import "./input.scss";

function Input({ type, name, placeholder, onInputChange , req=true , inputWidth="300px" , placeColor="#008894" , placeBgColor="#FFFFFF" , inputBorderColor="#008894"}) {
  const [input, setInput] = useState("");

  const inputHandle = (e) => {
    setInput(e.target.value);
    onInputChange(e);
  };

  const initialInputSetup=(id)=>{
    const input_container = document.getElementById(id);
   
    input_container.style.width = inputWidth
    input_container.style.border = `1px solid ${inputBorderColor}`
    
  }
  const initialPlaceholderSetup = (id)=>{
    const placeholder = document.getElementById(id)
    placeholder.style.color = placeColor
    placeholder.style.backgroundColor = placeBgColor
    placeholder.style.transition="all ease 0.3s"
    
  }

  useEffect(()=>{
    console.log(inputWidth)
    initialInputSetup(name)
    initialPlaceholderSetup(placeholder)
   
  },[])


  // const legend = document.getElementsByClassName("legent");
  // legend.style.transition= "all ease 0.3s";
  // if don,t put any input..
  const handleInputBox = (id) => {
    if (input == "") {
      const legend = document.getElementById(id);
      legend.style.marginLeft = "20px";
      legend.style.marginTop = "12px";
    }
  };
  // legend.removeEventListener("click" , handleInputBox)

  //if click input box
  const placeholderHandle = (id) => {
    const legend = document.getElementById(id);
    legend.style.marginLeft = "8px";
    legend.style.marginTop = "-12px";
  };
  return (
    <>
      <fieldset
        id={name}
        className="legend_container"
        onClick={() => placeholderHandle(placeholder)}
        onChange={() => placeholderHandle(placeholder)}
       
      >
        <legend className="legend" id={placeholder}>
          {placeholder}
        </legend>
        <input
          type={type}
          required={req}
          name={name}
          onChange={inputHandle}
          onBlur={() => handleInputBox(placeholder)}
        />
        
      </fieldset>
    </>
  );
}

export default Input;
