import React, { useState } from 'react';

const Datepicker = () => {
  const [selectedDate, setSelectedDate] = useState('');

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  return (
    <div className="flex flex-col gap-7 justify-center items-center min-h-screen">
       <div className='bg-blue-400 flex items-center justify-center p-3 w-48 mx-auto rounded-lg'>
        <h2>Manual Date-picker</h2>
      </div> 
      <div className="bg-gray-500 p-8 rounded-lg shadow-lg">
        <label htmlFor="datepicker" className="block text-sm  text-black font-medium bg-green-500 px-3 py-3 rounded-md">
          Select a date:
        </label>
        <input
          type="date"
          id="datepicker"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm "
          value={selectedDate}
          onChange={handleDateChange}
        />
        {selectedDate && (
          <p className="mt-3 text-sm text-gray-500 font-bold bg-yellow-600 px-3 py-3 rounded-md">
            Selected date: {selectedDate}
          </p>
        )}
      </div>
    </div>
  );
};

export default Datepicker;
