'use client';
import React from "react";
import { FaHome, FaChartBar, FaUser } from "react-icons/fa";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-800 text-white min-h-screen p-4 hidden md:block">
      <h2 className="text-lg font-bold mb-6">VersaCollectIQ</h2>
      <nav className="space-y-4">
        <a href="#" className="flex items-center gap-2 text-sm hover:text-blue-400">
          <FaHome /> Dashboard
        </a>
        <a href="#" className="flex items-center gap-2 text-sm hover:text-blue-400">
          <FaChartBar /> Reports
        </a>
        <a href="#" className="flex items-center gap-2 text-sm hover:text-blue-400">
          <FaUser /> Accounts
        </a>
      </nav>
    </aside>
  );
}
