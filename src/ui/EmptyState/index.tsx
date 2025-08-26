"use client";
import { motion } from "framer-motion";

function EmptyState({
  title = "Your cart is empty",
  subtitle = "Add services to see them here.",
  cta,
}: {
  title?: string;
  subtitle?: string;
  cta?: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col items-center justify-center text-center rounded-xl border border-neutrals-100 bg-white p-8"
    >
      {/* Simple shopping cart SVG */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 200 200"
        className="w-48 h-48 mb-6"
      >
        <ellipse cx="100" cy="160" rx="60" ry="15" fill="#EEF2FF" />
        <rect x="60" y="40" width="80" height="100" rx="10" fill="#E0E7FF" stroke="#6366F1" strokeWidth="3" />
        <path d="M140 40 L120 40 L140 60 Z" fill="#C7D2FE" />
        <line x1="75" y1="70" x2="125" y2="70" stroke="#A5B4FC" strokeWidth="4" strokeLinecap="round" />
        <line x1="75" y1="90" x2="115" y2="90" stroke="#CBD5E1" strokeWidth="3" strokeLinecap="round" />
        <line x1="75" y1="110" x2="125" y2="110" stroke="#CBD5E1" strokeWidth="3" strokeLinecap="round" />
        <circle cx="50" cy="60" r="6" fill="#A5B4FC" />
        <circle cx="150" cy="120" r="5" fill="#6366F1" opacity="0.6" />
        <circle cx="130" cy="50" r="4" fill="#818CF8" opacity="0.8" />
      </svg>

      <h3 className="text-lg font-semibold text-neutrals-700">{title}</h3>
      <p className="mt-1 text-sm text-neutrals-700">{subtitle}</p>

      <div className="mt-4">{cta}</div>
    </motion.div>
  );
}

export default EmptyState;
