"use client";

import { Share2 } from "lucide-react";

export function ShareButton({ title }: { title: string }) {
  async function handleShare() {
    const url = window.location.href;

    if (navigator.share) {
      try {
        await navigator.share({ title, url });
      } catch {
      }
      return;
    }

    // Fallback for Safari
    await navigator.clipboard.writeText(url);
    alert("Link project disalin ke clipboard!");
  }

  return (
    <button
      type="button"
      onClick={handleShare}
      className="flex items-center gap-2 rounded-full border border-border px-4 py-2
                 text-sm font-medium text-muted transition-colors hover:border-primary hover:text-primary"
    >
      <Share2 size={16} /> Share
    </button>
  );
}