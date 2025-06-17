'use client';
import { useState, useEffect } from 'react';

export default function AcademicsPage() {
  const [academics, setAcademics] = useState([]);
  const [formData, setFormData] = useState({ semester: '', gpa: '' });

  const getAcademics = async () => {
    const res = await fetch('/api/academics');
    const data = await res.json();
    setAcademics(data);
  };

  const addAcademic = async () => {
    await fetch('/api/academics', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    getAcademics();
  };

  useEffect(() => { getAcademics(); }, []);

  return (
    <div>
      <h2>Academics</h2>
      <input placeholder="Semester" onChange={(e) => setFormData({ ...formData, semester: e.target.value })} />
      <input placeholder="GPA" onChange={(e) => setFormData({ ...formData, gpa: e.target.value })} />
      <button onClick={addAcademic}>Add Academic</button>
      <ul>{academics.map((a) => <li key={a._id}>{a.semester} - {a.gpa}</li>)}</ul>
    </div>
  );
}
