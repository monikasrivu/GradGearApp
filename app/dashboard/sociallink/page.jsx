'use client';
import { useState, useEffect } from 'react';

export default function SocialLinksPage() {
  const [links, setLinks] = useState([]);
  const [formData, setFormData] = useState({ platform: '', url: '' });

  const getLinks = async () => {
    const res = await fetch('/api/sociallinks');
    const data = await res.json();
    setLinks(data);
  };

  const addLink = async () => {
    await fetch('/api/sociallinks', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    getLinks();
  };

  useEffect(() => { getLinks(); }, []);

  return (
    <div>
      <h2>Social Links</h2>
      <input placeholder="Platform" onChange={(e) => setFormData({ ...formData, platform: e.target.value })} />
      <input placeholder="URL" onChange={(e) => setFormData({ ...formData, url: e.target.value })} />
      <button onClick={addLink}>Add Link</button>
      <ul>{links.map((l) => <li key={l._id}>{l.platform} - {l.url}</li>)}</ul>
    </div>
  );
}
