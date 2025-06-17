"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ModelPage({ title, apiEndpoint, fields }) {
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch(apiEndpoint);
    const json = await res.json();
    setData(json);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch(apiEndpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    if (res.ok) {
      fetchData();
      setFormData({});
      alert("Data Added Successfully");
    } else {
      alert("Error adding data");
    }
  };

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold text-center">{title}</h1>

      <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
        {fields.map((field) => (
          <input
            key={field}
            name={field}
            value={formData[field] || ""}
            onChange={handleChange}
            placeholder={field}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        ))}
        <Button type="submit" className="w-full">Add {title}</Button>
      </form>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map((item, index) => (
          <Card key={index}>
            <CardContent className="p-4 space-y-2">
              {fields.map((field) => (
                <p key={field}>
                  <strong>{field}:</strong> {item[field]}
                </p>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
