import React from "react";

const WarningBanner = () => {
  return (
    <div className="fixed top-0 left-0 w-full text-xs z-50 bg-yellow-400 text-yellow-900 text-center font-medium px-4 py-2">
      ⚠ This is a <strong>student project</strong> and is not affiliated with,
      endorsed by, or associated with Coinbase in any way.
    </div>
  );
};

export default WarningBanner;
