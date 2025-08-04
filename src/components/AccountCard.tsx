"use client";

import React, { useState } from "react";
import AccountModal from "./AccountModal";

interface Props {
  account: {
    id: string;
    name: string;
    status: string;
    persona: string;
    balance: string;
    lastContact: string;
    industry: string;
    notes: string;
    collector: string;
    daysPastDue: number;
    lastPaymentAttempt: string;
    client: string;
  };
}

const personaGlowMap: { [key: string]: string } = {
  ERR: "ring-red-500 shadow-red-500/40",
  Ghost: "ring-blue-400 shadow-blue-500/30",
  Stephanie: "ring-emerald-400 shadow-emerald-500/30",
  default: "ring-purple-500 shadow-purple-500/30",
};

const AccountCard: React.FC<Props> = ({ account }) => {
  const [isOpen, setIsOpen] = useState(false);
  const glow = personaGlowMap[account.persona] || personaGlowMap.default;

  return (
    <>
      <div
        className={`bg-zinc-900 text-white rounded-xl p-6 w-full max-w-2xl transition-all hover:scale-[1.02] duration-200 cursor-pointer border border-zinc-700 ring-2 ${glow}`}
        onClick={() => setIsOpen(true)}
      >
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
          <div>
            <h2 className="text-xl font-semibold text-white">{account.name}</h2>
            <p className="text-sm text-gray-400">Client: {account.client}</p>
          </div>
          <div className="text-right sm:text-left">
            <p className="text-lg font-bold text-green-400">${account.balance}</p>
            <p className="text-xs text-gray-300">{account.status}</p>
          </div>
        </div>
        <div className="mt-3 flex flex-wrap gap-3 text-xs text-gray-400">
          <span className="px-2 py-0.5 rounded bg-zinc-800 border border-zinc-600">
            Persona: {account.persona}
          </span>
          <span className="px-2 py-0.5 rounded bg-zinc-800 border border-zinc-600">
            Industry: {account.industry}
          </span>
          <span className="px-2 py-0.5 rounded bg-zinc-800 border border-zinc-600">
            Collector: {account.collector}
          </span>
        </div>
      </div>

      {isOpen && (
        <AccountModal account={account} onClose={() => setIsOpen(false)} />
      )}
    </>
  );
};

export default AccountCard;
