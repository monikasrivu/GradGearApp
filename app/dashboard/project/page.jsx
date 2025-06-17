'use client';
import { useState, useEffect } from 'react';

export default function ProjectsPage() {
  const [projects, setProjects] = useState([]);
  const [formData, setFormData] = useState({ title: '', description: '' });

  const getProjects = async () => {
    const res = await fetch('/api/projects');
    const data = await res.json();
    setProjects(data);
  };

  const addProject = async () => {
    await fetch('/api/projects', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    getProjects();
  };

  useEffect(() => { getProjects(); }, []);

  return (
    <div>
      <h2>Projects</h2>
      <input placeholder="Title" onChange={(e) => setFormData({ ...formData, title: e.target.value })} />
      <input placeholder="Description" onChange={(e) => setFormData({ ...formData, description: e.target.value })} />
      <button onClick={addProject}>Add Project</button>
      <ul>{projects.map((p) => <li key={p._id}>{p.title} - {p.description}</li>)}</ul>
    </div>
  );
}
