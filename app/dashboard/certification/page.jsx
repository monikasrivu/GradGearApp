'use client';
import { useState, useEffect } from 'react';

export default function CertificationsPage() {
  const [certifications, setCertifications] = useState([]);
  const [formData, setFormData] = useState({ title: '', issuer: '' });

  const getCertifications = async () => {
    const res = await fetch('/api/certifications');
    const data = await res.json();
    setCertifications(data);
  };

  const addCertification = async () => {
    await fetch('/api/certifications', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    getCertifications();
  };

  useEffect(() => { getCertifications(); }, []);

  return (
    <div>
      <h2>Certifications</h2>
      <input placeholder="Title" onChange={(e) => setFormData({ ...formData, title: e.target.value })} />
      <input placeholder="Issuer" onChange={(e) => setFormData({ ...formData, issuer: e.target.value })} />
      <button onClick={addCertification}>Add Certification</button>
      <ul>{certifications.map((c) => <li key={c._id}>{c.title} - {c.issuer}</li>)}</ul>
    </div>
  );
}
