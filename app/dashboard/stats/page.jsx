"use client";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { module: "Profile", completed: 1 },
  { module: "Academics", completed: 1 },
  { module: "Projects", completed: 1 },
  { module: "Internships", completed: 1 },
  { module: "Certifications", completed: 1 },
  { module: "Resume", completed: 1 },
  { module: "Skills", completed: 1 },
  { module: "Social Links", completed: 1 },
];

export default function StatsPage() {
  return (
    <div className="min-h-screen p-10 bg-gray-50">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">📊 Module Completion Stats</h2>
      <div className="w-full h-96 bg-white rounded-lg shadow p-6">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <XAxis dataKey="module" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="completed" fill="#6366f1" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
