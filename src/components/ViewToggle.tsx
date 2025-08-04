"use client";

import React, { useState } from "react";
import CollectorDashboard from "@/components/CollectorDashboard";
import TableView from "@/components/TableView";

export default function ViewToggle() {
  const [view, setView] = useState("cards");

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-2">
          <img
            src="/icons/versacollectiq-brain.svg"
            alt="VersaCollectIQ Logo"
            className="w-8 h-8"
          />
          <h1 className="text-3xl font-bold tracking-wide text-white">VersaCollectIQ</h1>
        </div>
        <div className="space-x-2">
          <button
            className={`px-4 py-2 rounded-lg text-sm font-medium ${
              view === "cards" ? "bg-blue-600" : "bg-gray-700"
            }`}
            onClick={() => setView("cards")}
          >
            📇 Cards
          </button>
          <button
            className={`px-4 py-2 rounded-lg text-sm font-medium ${
              view === "table" ? "bg-blue-600" : "bg-gray-700"
            }`}
            onClick={() => setView("table")}
          >
            📊 Table
          </button>
        </div>
      </div>

      {view === "cards" ? <CollectorDashboard /> : <TableView />}
    </div>
  );
}
