// src/components/SharePdfButton.tsx
import React from "react";

interface Props {
  pdfPath?: string; // relative path under public/, e.g. "/atlas_features_whitepaper_styled.pdf"
  label?: string;
}

const SharePdfButton: React.FC<Props> = ({ pdfPath = "/atlas_features_whitepaper_styled.pdf", label = "Download Features PDF" }) => {
  const url = typeof window !== "undefined" ? window.location.origin + pdfPath : pdfPath;

  const handleShare = async () => {
    if ((navigator as any).share) {
      try {
        await (navigator as any).share({
          title: "ATLAS Protocol — Features",
          text: "Download the ATLAS Protocol features summary.",
          url,
        });
      } catch (err) {
        // user cancelled or share failed
        console.warn("Share failed", err);
      }
    } else {
      // fallback: copy link to clipboard
      try {
        await navigator.clipboard.writeText(url);
        alert("Link copied to clipboard: " + url);
      } catch (err) {
        window.open(url, "_blank");
      }
    }
  };

  return (
    <button
      onClick={handleShare}
      className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
    >
      {label}
    </button>
  );
};

export default SharePdfButton;
