"use client";

import React from "react";
import DashboardCard from "@/components/DashboardCard"; // ✅ Reusable component

const dashboardModules = [
  { name: "Profile", path: "/dashboard/profile" },
  { name: "Academics", path: "/dashboard/academics" },
  { name: "Projects", path: "/dashboard/projects" },
  { name: "Internships", path: "/dashboard/internships" },
  { name: "Certifications", path: "/dashboard/certifications" },
  { name: "Resume", path: "/dashboard/resume" },
  { name: "Skills", path: "/dashboard/skills" },
  { name: "Social Links", path: "/dashboard/sociallinks" },
  { name: "Joke", path: "/dashboard/jokes" }, // ✅ Added this line
  { name: "Chart", path: "/dashboard/chart" }, // ✅ New chart module
];

export default function DashboardHome() {
  // Fallback error message if something goes wrong
  if (!dashboardModules || dashboardModules.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-red-50">
        <p className="text-red-600 text-lg font-semibold">
          😵 Oops! Dashboard modules failed to load. Please try refreshing the page.
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 p-10">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">🎓 GradGear Dashboard</h1>
      <p className="text-center text-gray-600 mb-10">Manage all your portfolio modules below:</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {dashboardModules.map((module) => (
          <DashboardCard key={module.name} name={module.name} path={module.path} />
        ))}
      </div>
    </div>
  );
}
