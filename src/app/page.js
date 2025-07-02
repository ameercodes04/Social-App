'use client';
import { useState } from 'react';

export default function Home() {
  const [display, setdisplay] = useState([
    { name: 'Ali', date: '2005-10-02' },
    { name: 'Wadood', date: '2005-09-03' },
    { name: 'Hamza', date: '2005-11-02' }
  ]);

  const [opening, setopening] = useState('Hi! Welcome to your app');
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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white flex flex-col items-center justify-center p-6 space-y-6 font-sans">
      <h1 className="text-4xl font-extrabold tracking-wide text-pink-500 drop-shadow-lg">
        {opening}
      </h1>

      {!vbutton && (
        <div className="bg-white bg-opacity-5 backdrop-blur-lg p-6 rounded-2xl shadow-inner w-full max-w-md space-y-4">
          <ul className="space-y-3">
            {display.map((person, index) => (
              <li
                key={index}
                className="text-lg font-medium text-gray-100 border-b border-gray-700 pb-2"
              >
                🎂 {`${person.name}'s birthday is in ${getDays(person.date)} days`}
              </li>
            ))}
          </ul>
        </div>
      )}

      {vbutton && (
        <button
          onClick={handleClick}
          className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-6 rounded-full shadow-xl transition duration-300 text-lg animate-pulse"
        >
          Click to See Birthdays SHAZI BHAI
        </button>
      )}
    </div>
  );
}
