import React, { useState, useEffect } from "react";
import './runner.css'

function RunningText({text}) {

useEffect(() => {
    var style = document.createElement('style');
    style.innerHTML = `@keyframes my-ani{
        0%{
            right: ${document.querySelector('.ani').offsetWidth-1900}px;
        }
        100%{
            right: 100%; 
        }
    }`
    document.head.appendChild(style);
},[])

return (
    <>
    <div className="relative w-full h-10 overflow-hidden text-blue-500 marquee">
        <p className="absolute my-2 p-0 w-max ani font-extrabold">{text}</p>
    </div>
    </>
  );  
}

export default RunningText;
