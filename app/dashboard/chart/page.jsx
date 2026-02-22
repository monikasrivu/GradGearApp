"use client";

import React from "react"; // ✅ Import React

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Projects", count: 4 },
  { name: "Internships", count: 2 },
  { name: "Certifications", count: 3 },
  { name: "Skills", count: 6 },
];

export default function ChartPage() {
  return (
    <div className="p-10 min-h-screen bg-gradient-to-r from-sky-100 to-indigo-100">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        📊 My Dashboard Summary
      </h1>

      <div className="bg-white p-6 rounded-xl shadow-md max-w-4xl mx-auto">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis allowDecimals={false} />
            <Tooltip />
            <Legend />
            <Bar dataKey="count" fill="#6366f1" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
