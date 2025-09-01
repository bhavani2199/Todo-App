"use client";
import { useState } from 'react';

const types = [
  'education','recreational','social','diy','charity',
  'cooking','relaxation','music','busywork'
];

export default function TodoForm({ addTodo }) {
  const [activity, setActivity] = useState('');
  const [price, setPrice] = useState('');
  const [type, setType] = useState(types[0]);
  const [booking, setBooking] = useState(false);
  const [accessibility, setAccessibility] = useState(0.5);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!activity) return;
    addTodo({ activity, price: Number(price), type, booking, accessibility });
    setActivity('');
    setPrice('');
    setType(types[0]);
    setBooking(false);
    setAccessibility(0.5);
  };

  return (
    <form onSubmit={handleSubmit} className='space-x-4 p-2 mb-1 space-y-4'>
      <input
        type="text"
        placeholder="Activity"
        value={activity}
        onChange={e => setActivity(e.target.value)}
        className='mr-4 rounded border-1'
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={e => setPrice(e.target.value)}
        className='mr-4 rounded border-1'
      />
      <select value={type} onChange={e => setType(e.target.value)} className='border-1 rounded p-0.5'>
        {types.map(t => <option key={t} value={t}>{t}</option>)}
      </select>
      <label className='mr-4 '>
        Booking?
        <input type="checkbox" checked={booking} onChange={e => setBooking(e.target.checked)} />
      </label>
      <label className='mr-4'>
        Accessibility:
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={accessibility}
          onChange={e => setAccessibility(Number(e.target.value))}
        />
      </label>
      <button type="submit" className='border-1 rounded p-1.5 bg-blue-700 text-white'>Add</button>
    </form>
  );
}
