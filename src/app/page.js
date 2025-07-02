'use client';
import { useState } from 'react';

export default function Home() {
  const [display, setdisplay] = useState([
    { name: 'Ali', date: '2005-10-02' },
    { name: 'Wadood', date: '2005-09-03' },
    { name: 'Hamza', date: '2005-11-02' }
  ]);

  const [opening, setopening] = useState('Hi! Welcome to your app')
  const [vbutton, setbutton] = useState(true);

  const handleClick = () => {
    setopening('Birthdays Countdown:');
    setbutton(false);
  };

  function getDays(date) {
    const today = new Date();
    const thisYear = today.getFullYear();

    const [birthYear, birthMonth, birthDay] = date.split('-');
    let birthday = new Date(thisYear, birthMonth - 1, birthDay);

    if (birthday < today) {
      birthday = new Date(thisYear + 1, birthMonth - 1, birthDay);
    }

    const diff = birthday - today;
    const daysLeft = Math.ceil(diff / (1000 * 60 * 60 * 24));
    return daysLeft;
  }

  return (
    <div >
      <h1 >
          {opening}
      </h1>

      {!vbutton && (
        <div >
          <ul >
            {display.map((person, index) => (
              <li
                key={index}
                >
                🎂 {`${person.name}'s birthday is in ${getDays(person.date)} days`}


                {getDays(person.date)}
                
                days
              </li>
            ))}
          </ul>
        </div>
      )}

      {vbutton && (
        <button
          onClick={handleClick}
          
        >
          Click to See Birthdays SHAZI BHAI
        </button>
      )}
    </div>
  );
}
