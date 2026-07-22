"use client";

import React from "react";
import { SignalHigh, SignalMedium, SignalLow } from "lucide-react";

export type NetworkQuality = "good" | "fair" | "poor" | "unknown";

interface NetworkQualityBadgeProps {
  quality: NetworkQuality;
  rtt?: number;
  className?: string;
}

export function NetworkQualityBadge({
  quality,
  rtt,
  className = "",
}: NetworkQualityBadgeProps) {
  const getBadgeDetails = () => {
    switch (quality) {
      case "good":
        return {
          icon: <SignalHigh className="w-4 h-4 text-green-500" />,
          bgColor: "bg-green-500/10",
          borderColor: "border-green-500/20",
          textColor: "text-green-600 dark:text-green-400",
          label: "Good",
        };
      case "fair":
        return {
          icon: <SignalMedium className="w-4 h-4 text-yellow-500" />,
          bgColor: "bg-yellow-500/10",
          borderColor: "border-yellow-500/20",
          textColor: "text-yellow-600 dark:text-yellow-400",
          label: "Fair",
        };
      case "poor":
        return {
          icon: <SignalLow className="w-4 h-4 text-red-500" />,
          bgColor: "bg-red-500/10",
          borderColor: "border-red-500/20",
          textColor: "text-red-600 dark:text-red-400",
          label: "Poor",
        };
      default:
        return {
          icon: <SignalMedium className="w-4 h-4 text-zinc-400" />,
          bgColor: "bg-zinc-500/10",
          borderColor: "border-zinc-500/20",
          textColor: "text-zinc-500 dark:text-zinc-400",
          label: "Unknown",
        };
    }
  };

  const details = getBadgeDetails();

  return (
    <div
      className={`inline-flex items-center gap-1.5 px-2 py-1 rounded-full border text-xs font-medium transition-colors ${details.bgColor} ${details.borderColor} ${details.textColor} ${className}`}
      title={rtt !== undefined ? `RTT: ${Math.round(rtt)}ms` : "Network Quality"}
    >
      {details.icon}
      <span>{details.label}</span>
      {rtt !== undefined && (
        <span className="text-[10px] opacity-75 font-mono ml-0.5">
          {Math.round(rtt)}ms
        </span>
      )}
    </div>
  );
}
