"use client";

import { useState } from "react";

export default function ProfilePage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    dob: "",
    department: "",
    year: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/profile", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      setMessage("Profile Saved Successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        dob: "",
        department: "",
        year: "",
      });
    } else {
      setMessage("Error saving profile.");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow-md space-y-4">
      <h2 className="text-2xl font-bold text-center mb-4">Profile Form</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {["name", "email", "phone", "dob", "department", "year"].map((field) => (
          <input
            key={field}
            type="text"
            name={field}
            placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
            value={formData[field]}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md"
            required
          />
        ))}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Save Profile
        </button>
      </form>
      {message && <p className="text-center mt-4">{message}</p>}
    </div>
  );
}
