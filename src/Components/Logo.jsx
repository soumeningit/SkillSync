import React from "react";

function Logo() {
  return (
    <>
      <svg
        width="50"
        height="50"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>SkillSync Logo</title>
        <defs>
          <linearGradient
            id="skillSyncGradient"
            x1="50"
            y1="30"
            x2="150"
            y2="170"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#2563EB" />
            <stop offset="1" stopColor="#10B981" />
          </linearGradient>
        </defs>
        <path
          d="M110 30C110 46.5685 96.5685 60 80 60C63.4315 60 50 73.4315 50 90C50 106.569 63.4315 120 80 120H120"
          stroke="url(#skillSyncGradient)"
          strokeWidth="20"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M90 170C90 153.431 103.431 140 120 140C136.569 140 150 126.569 150 110C150 93.4315 136.569 80 120 80H80"
          stroke="url(#skillSyncGradient)"
          strokeWidth="20"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  );
}

export default Logo;
