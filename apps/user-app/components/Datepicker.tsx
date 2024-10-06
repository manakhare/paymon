import React, { useState } from 'react';

const DatePicker = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const handleDateChange = (event: any) => {
    setSelectedDate(event.target.value);
    setIsOpen(false);
  };

  return (
    <div className="relative cursor-pointer">
      <input
        type="text"
        placeholder="Select date"
        value={selectedDate}
        readOnly
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-2 shadow-md border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {isOpen && (
        <input
          type="date"
          onChange={handleDateChange}
          className="absolute top-0 left-0 px-2 w-full border rounded-md bg-white shadow-md focus:outline-none"
        />
      )}
    </div>
  );
};

export default DatePicker;
