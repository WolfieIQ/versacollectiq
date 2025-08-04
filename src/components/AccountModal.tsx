"use client";

import React from "react";

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
  onClose: () => void;
}

const AccountModal: React.FC<Props> = ({ account, onClose }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black/70 flex items-center justify-center z-50">
      <div className="modal-glow card max-w-lg w-full relative p-6 text-white bg-neutral-900 rounded-xl shadow-2xl border border-gray-700 animate-fade-in">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-[#ef4444] text-lg font-bold hover:scale-110 transition-transform"
        >
          ✕
        </button>
        <h2 className="text-2xl font-bold mb-2">{account.name}</h2>
        <div className="space-y-1 text-sm text-gray-200">
          <p><strong>Balance:</strong> {account.balance}</p>
          <p><strong>Status:</strong> {account.status}</p>
          <p><strong>Persona:</strong> {account.persona}</p>
          <p><strong>Last Contact:</strong> {account.lastContact}</p>
          <p><strong>Industry:</strong> {account.industry}</p>
          <p><strong>Collector:</strong> {account.collector}</p>
          <p><strong>Client:</strong> {account.client}</p>
          <p><strong>Notes:</strong> {account.notes}</p>
        </div>
        <div className="mt-4 text-xs text-gray-400 border-t pt-2">
          <p>Days Past Due: <span className="font-semibold text-red-400">{account.daysPastDue}</span></p>
          <p>Last Payment Attempt: {account.lastPaymentAttempt}</p>
        </div>
      </div>
    </div>
  );
};

export default AccountModal;