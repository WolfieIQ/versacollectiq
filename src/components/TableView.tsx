"use client";
import { useState } from "react";

const accounts = [
  { id: "442229", name: "Excel Distributors", balance: 6529.27, score: 81, profile: "TactIQ", nextContact: "2025-08-01 08:00", timezone: "EST" },
  { id: "520290", name: "The A/C Ductologist", balance: 19414.00, score: 65, profile: "Pulse", nextContact: "2025-08-02 10:30", timezone: "CST" },
  { id: "526289", name: "POWERTEC INC", balance: 6900.00, score: 42, profile: "Surge", nextContact: "2025-08-03 09:00", timezone: "EST" },
  { id: "336187", name: "Caseshack", balance: 4391.10, score: 74, profile: "Overwatch", nextContact: "2025-08-04 08:45", timezone: "PST" },
  { id: "476633", name: "RT Service and Repair", balance: 7135.10, score: 55, profile: "Echo", nextContact: "2025-08-05 10:15", timezone: "EST" }
];

export default function TableView() {
  return (
    <div className="p-6 bg-slate-950 text-white min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Collector Table View</h1>
      <div className="overflow-x-auto rounded-xl shadow-lg">
        <table className="min-w-full table-auto border-collapse bg-gray-900">
          <thead>
            <tr className="text-sm text-gray-300 uppercase border-b border-gray-700">
              <th className="p-3 text-left">Company</th>
              <th className="p-3 text-left">Debtor ID</th>
              <th className="p-3 text-left">Balance</th>
              <th className="p-3 text-left">Score</th>
              <th className="p-3 text-left">Profile</th>
              <th className="p-3 text-left">Next Contact</th>
              <th className="p-3 text-left">Timezone</th>
              <th className="p-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {accounts.map((acct, i) => (
              <tr key={i} className="hover:bg-slate-800 text-sm border-b border-slate-800">
                <td className="p-3 font-medium text-blue-300">{acct.name}</td>
                <td className="p-3">{acct.id}</td>
                <td className="p-3 text-green-400 font-semibold">${acct.balance.toLocaleString()}</td>
                <td className="p-3">
                  <span className={acct.score > 70 ? "text-green-400" : acct.score > 50 ? "text-yellow-400" : "text-red-400"}>
                    {acct.score}
                  </span>
                </td>
                <td className="p-3">
                  <span className="px-2 py-1 text-xs bg-blue-600 rounded-full">{acct.profile}</span>
                </td>
                <td className="p-3">{acct.nextContact}</td>
                <td className="p-3">{acct.timezone}</td>
                <td className="p-3 flex gap-2">
                  <button className="bg-green-600 hover:bg-green-700 text-xs px-2 py-1 rounded">Paid</button>
                  <button className="bg-yellow-600 hover:bg-yellow-700 text-xs px-2 py-1 rounded">Escalate</button>
                  <button className="bg-slate-600 hover:bg-slate-700 text-xs px-2 py-1 rounded">📝</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}