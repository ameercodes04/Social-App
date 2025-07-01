  'use client';
  import { useState} from "react";
  export default function Home()
  {
    const[message, setMessage]= useState("Hello Fatty!");
    const handleClick= () => {
      setMessage("You Clicked the button fattu!");    
  };
  return(
    <div>
      <h1>
        {message}
      </h1>
      <button onClick={handleClick}>Click Me

      </button>
      </div>

  );
}