
'use client';
import { useState } from 'react';
export default function Home()
{
  const[display, setdisplay] = useState(
  [
   {name: "Ali", date: "02-10-2005"},
   {name: "Wadood", date: "03-10-2005"},
   {name: "Hamza", date: "02-11-2005"}
  ]
  );
  const[opening , setopening] = useState("Welcome to your App!");
  const[vbutton, setbutton] = useState(true);
  const handleClick= ()=>
  {
    setopening("Birthdays Countdown: ");
    setbutton(false);

  };
  return (
    <div>
      <h1>{opening}</h1>
      {!vbutton && (
      <ul>               
      {display.map((person, index) => (  
        <li key={index}>
          {person.name} was born on {person.date}
        </li>
      ))}
    </ul>
      )}
      {vbutton && (
        <button onClick={handleClick}>Show Birthday Countdown</button>
      )}
    </div>
  );
}