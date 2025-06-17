'use client';
import { useState, useEffect } from 'react';

export default function SkillsPage() {
  const [skills, setSkills] = useState([]);
  const [formData, setFormData] = useState({ name: '', level: '' });

  const getSkills = async () => {
    const res = await fetch('/api/skills');
    const data = await res.json();
    setSkills(data);
  };

  const addSkill = async () => {
    await fetch('/api/skills', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    getSkills();
  };

  useEffect(() => { getSkills(); }, []);

  return (
    <div>
      <h2>Skills</h2>
      <input placeholder="Name" onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
      <input placeholder="Level" onChange={(e) => setFormData({ ...formData, level: e.target.value })} />
      <button onClick={addSkill}>Add Skill</button>
      <ul>{skills.map((s) => <li key={s._id}>{s.name} - {s.level}</li>)}</ul>
    </div>
  );
}
