"use client";
import React from "react";

export default function TextInput({ name, value, onChange }) {
  return (
    <input
      type="text"
      name={name}
      placeholder={name.charAt(0).toUpperCase() + name.slice(1)}
      value={value}
      onChange={onChange}
      className="w-full px-4 py-2 border rounded-md"
      required
    />
  );
}
