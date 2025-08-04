import React from "react";
import { mockAccounts } from "@/data/accounts";

const CollectorPanel: React.FC = () => {
  const totalAccounts = mockAccounts.length;
  const totalBalance = mockAccounts.reduce((sum, acc) => {
    const num = Number(acc.balance.replace(/[$,]/g, ""));
    return sum + num;
  }, 0);
  const avgDaysPastDue = Math.round(
    mockAccounts.reduce((sum, acc) => sum + acc.daysPastDue, 0) / totalAccounts
  );

  const personaCounts: Record<string, number> = {};
  mockAccounts.forEach((acc) => {
    personaCounts[acc.persona] = (personaCounts[acc.persona] || 0) + 1;
  });

  return (
    <div className="w-1/3 bg-gray-800 p-4 rounded-xl border border-gray-700 shadow-md font-orbitron">
      <h2 className="text-lg font-semibold mb-4 text-white">Collector Overview</h2>

      <div className="space-y-2 text-sm text-gray-300">
        <p><span className="text-white">Accounts Assigned:</span> {totalAccounts}</p>
        <p><span className="text-white">Total Balance:</span> ${totalBalance.toLocaleString()}</p>
        <p><span className="text-white">Avg Days Past Due:</span> {avgDaysPastDue} days</p>
      </div>

      <div className="mt-6">
        <p className="text-sm text-blue-400 font-semibold mb-2">WolfIQ Persona Spread</p>
        {Object.entries(personaCounts).map(([persona, count]) => (
          <div key={persona} className="flex justify-between text-sm text-gray-200">
            <span>{persona}</span>
            <span>{count}</span>
          </div>
        ))}
      </div>

      <div className="mt-6 border-t border-gray-700 pt-4 text-sm text-red-400">
        <p>⚠️ Escalation Flags: {mockAccounts.filter(a => a.status.includes("Escalated")).length}</p>
      </div>
    </div>
  );
};

export default CollectorPanel;
