'use client';
import React from "react";

interface PersonaToggleProps {
  selectedPersona: string;
  setSelectedPersona: (persona: string) => void;
}

const personas = ["ERR", "Ghost", "Stephanie", "Brute"];

export default function PersonaToggle({ selectedPersona, setSelectedPersona }: PersonaToggleProps) {
  return (
    <div className="mb-4">
      <label htmlFor="persona-select" className="block text-sm font-medium text-gray-700 mb-1">
        Select Persona
      </label>
      <select
        id="persona-select"
        value={selectedPersona}
        onChange={(e) => setSelectedPersona(e.target.value)}
        className="block w-full max-w-xs border border-gray-300 rounded-md shadow-sm p-2 text-sm focus:ring-blue-500 focus:border-blue-500"
      >
        {personas.map((persona) => (
          <option key={persona} value={persona}>
            {persona}
          </option>
        ))}
      </select>
    </div>
  );
}
