"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function DashboardCard({ name, path }) {
  return (
    <Link href={path}>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="bg-white rounded-xl shadow-md p-6 text-center cursor-pointer border border-gray-200"
      >
        <h2 className="text-2xl font-semibold text-indigo-600 mb-2">{name}</h2>
      </motion.div>
    </Link>
  );
}
