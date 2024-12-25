import React, { useRef, useState } from "react";

const ArrayMethods = () => {
  let inputRef = useRef();
  const [array, setArray] = useState([1, 2, 3, 4]);
  
  return (
    <div>
      <h1>Array Manipulation</h1>
      <h2>Origial Array: {array.join()}</h2>
      <h2 id="pop"></h2>
      <h2 id="push"></h2>
      <h2 id="unshift"></h2>
      <h2 id="shift"></h2>

      

      <input ref={inputRef} ></input>
      <br></br>

      <button
        onClick={() => {
           array.push(inputRef.current.value)
            document.getElementById("push").innerHTML=`After push array is : ${array}`
          
           
        }}
      >
        Push
      </button>
      <button
        onClick={() => {
            document.getElementById("pop").innerHTML=`poped number is: ${array.pop()}......Remining array: ${array}`
            
        }}
      >
        Pop Last Item
      </button>
      <button
        onClick={() => {
           let pop= document.getElementById("pop")
            pop.innerHTML=`poped number is: ${array.shift()}......Remining array: ${array}`
        }}
      >
        Shift
      </button>
      <button
        onClick={() => {
            array.unshift(inputRef.current.value)
            document.getElementById("unshift").innerHTML=`After unshift array is : ${array}`
        }}
      >
        Unshift
      </button>
      <button
        onClick={() => {
          const newArray = [...array];
          newArray.splice(2, 1, 6);
          setArray(newArray);
        }}
      >
        Splice at Index 2
      </button>
      <button onClick={() => {
       let p=document.getElementById("dom")
        p.innerHTML="toString method:"+array.toString()
      }}>ToString</button>
    </div>
  );
};

export default ArrayMethods;
