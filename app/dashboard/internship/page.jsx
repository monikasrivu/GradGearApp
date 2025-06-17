'use client';
import { useState, useEffect } from 'react';

export default function InternshipsPage() {
  const [internships, setInternships] = useState([]);
  const [formData, setFormData] = useState({ company: '', role: '' });

  const getInternships = async () => {
    const res = await fetch('/api/internships');
    const data = await res.json();
    setInternships(data);
  };

  const addInternship = async () => {
    await fetch('/api/internships', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    getInternships();
  };

  useEffect(() => { getInternships(); }, []);

  return (
    <div>
      <h2>Internships</h2>
      <input placeholder="Company" onChange={(e) => setFormData({ ...formData, company: e.target.value })} />
      <input placeholder="Role" onChange={(e) => setFormData({ ...formData, role: e.target.value })} />
      <button onClick={addInternship}>Add Internship</button>
      <ul>{internships.map((i) => <li key={i._id}>{i.company} - {i.role}</li>)}</ul>
    </div>
  );
}
