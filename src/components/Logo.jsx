import React from "react";

export default function Logo({ name }) {
  return (
    <div className="px-4 py-2 bg-white/90 rounded shadow-sm text-sm">
      {name}
    </div>
  );
}
