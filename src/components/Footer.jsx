import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white/80 border-t">
      <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-sm text-gray-600">© {new Date().getFullYear()} Avodah Innovations — Mbarara City, Uganda</div>
        <div className="flex gap-4 text-sm">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Media Kit</a>
        </div>
      </div>
    </footer>
  );
}
