import React from "react";

export default function Preloader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white dark:bg-black z-[9999]">
      <div className="animate-spin rounded-full h-20 w-20 border-4 border-blue-600 border-t-transparent"></div>
    </div>
  );
}
