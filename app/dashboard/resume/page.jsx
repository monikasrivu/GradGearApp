'use client';
import { useState, useEffect } from 'react';

export default function ResumePage() {
  const [resumes, setResumes] = useState([]);
  const [formData, setFormData] = useState({ fileUrl: '' });

  const getResumes = async () => {
    const res = await fetch('/api/resume');
    const data = await res.json();
    setResumes(data);
  };

  const addResume = async () => {
    await fetch('/api/resume', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    getResumes();
  };

  useEffect(() => { getResumes(); }, []);

  return (
    <div>
      <h2>Resume</h2>
      <input placeholder="File URL" onChange={(e) => setFormData({ ...formData, fileUrl: e.target.value })} />
      <button onClick={addResume}>Add Resume</button>
      <ul>{resumes.map((r) => <li key={r._id}>{r.fileUrl}</li>)}</ul>
    </div>
  );
}
