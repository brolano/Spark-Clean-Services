import React, { useState } from 'react';

const Appointment = () => {
  const [formData, setFormData] = useState({ name: '', address: '', date: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Submit via GraphQL mutation (to be implemented)
    alert('Appointment scheduled!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
      <input name="address" value={formData.address} onChange={handleChange} placeholder="Address" required />
      <input name="date" type="date" value={formData.date} onChange={handleChange} required />
      <button type="submit">Set Appointment</button>
    </form>
  );
};

export default Appointment;