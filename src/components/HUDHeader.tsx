'use client';
import React from "react";

export default function HUDHeader() {
  return (
    <div className="bg-gray-900 text-white p-4 text-xl font-bold shadow-md flex justify-between items-center">
      <span>VersaCollectIQ Collector HUD</span>
      <div className="text-sm text-gray-400 font-medium">Status: Live</div>
    </div>
  );
}
