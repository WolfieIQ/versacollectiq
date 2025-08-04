"use client";
import AccountCard from "@/components/AccountCard";

const accounts = [
  { name: "Weston Concrete Supply", balance: "$24,100.00", score: 81, followUp: "2025-08-04", profile: "TactIQ", probability: 78 },
  { name: "Summit Steel Co.", balance: "$58,750.00", score: 65, followUp: "2025-08-06", profile: "Pulse", probability: 50 },
  { name: "RedLine Electrical", balance: "$13,920.00", score: 42, followUp: "2025-08-07", profile: "Surge", probability: 33 },
  { name: "Canyon Rebar", balance: "$72,500.00", score: 74, followUp: "2025-08-04", profile: "Overwatch", probability: 61 },
  { name: "HighPoint Drywall", balance: "$9,480.00", score: 55, followUp: "2025-08-05", profile: "Echo", probability: 45 }
];

export default function CollectorDashboard() {
  return (
    <div className="min-h-screen p-6 bg-gradient-to-br from-slate-900 to-gray-800 text-white">
      <h1 className="text-3xl font-bold mb-6">Collector HUD</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
        {accounts.map((acct, idx) => (
          <AccountCard key={idx} account={acct} />
        ))}
      </div>
      <div className="fixed bottom-4 right-4 bg-black bg-opacity-70 text-xs p-3 rounded-lg shadow-lg text-green-300">
        <p>✅ HUD initialized</p>
        <p>✅ 5 accounts loaded</p>
        <p>🔄 Standing by...</p>
      </div>
    </div>
  );
}