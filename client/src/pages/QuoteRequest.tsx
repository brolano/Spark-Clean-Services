import React, { useState } from 'react';

const QuoteRequest = () => {
  const [formData, setFormData] = useState({ name: '', email: '', details: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Submit via GraphQL mutation (to be implemented)
    alert('Quote requested!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
      <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
      <textarea name="details" value={formData.details} onChange={handleChange} placeholder="Cleaning Details" required />
      <button type="submit">Request Quote</button>
    </form>
  );
};

export default QuoteRequest;