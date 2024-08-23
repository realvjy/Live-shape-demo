import * as React from "react";

export const Union = ({ size = "24" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M14 7H7v7h3v3h7v-7h-3V7z"
        clipRule="evenodd"
        opacity="0.3"
      ></path>
      <mask
        id="mask0_3_90"
        style={{ maskType: "luminance" }}
        width="12"
        height="12"
        x="6"
        y="6"
        maskUnits="userSpaceOnUse"
      >
        <path
          fill="#fff"
          fillRule="evenodd"
          d="M7 6a1 1 0 00-1 1v7a1 1 0 001 1h2v2a1 1 0 001 1h7a1 1 0 001-1v-7a1 1 0 00-1-1h-2V7a1 1 0 00-1-1H7z"
          clipRule="evenodd"
        ></path>
      </mask>
      <g mask="url(#mask0_3_90)">
        <path
          fill="currentColor"
          d="M9 15h1v-1H9v1zm6-6h-1v1h1V9zM7 7V5a2 2 0 00-2 2h2zm0 7V7H5v7h2zm0 0H5a2 2 0 002 2v-2zm2 0H7v2h2v-2zm1 3v-2H8v2h2zm0 0H8a2 2 0 002 2v-2zm7 0h-7v2h7v-2zm0 0v2a2 2 0 002-2h-2zm0-7v7h2v-7h-2zm0 0h2a2 2 0 00-2-2v2zm-2 0h2V8h-2v2zm-1-3v2h2V7h-2zm0 0h2a2 2 0 00-2-2v2zM7 7h7V5H7v2z"
        ></path>
      </g>
    </svg>
  );
};

export const Intersect = ({ size = "24" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        fillOpacity="0.302"
        fillRule="evenodd"
        d="M14 10v4h-4v-4h4z"
        clipRule="evenodd"
      ></path>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M10.5 15H10v2h7v-7h-2v4a1 1 0 01-1 1h-3.5zm0-1H10v-4h4v4h-3.5zM9 14H7V7h7v2h-4a1 1 0 00-1 1v4zm-1 1H7a1 1 0 01-1-1V7a1 1 0 011-1h7a1 1 0 011 1v2h2a1 1 0 011 1v7a1 1 0 01-1 1h-7a1 1 0 01-1-1v-2H8z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};

export const Substract = ({ size = "24" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        fillOpacity="0.302"
        fillRule="evenodd"
        d="M10 14v3h7v-7h-3v4h-4z"
        clipRule="evenodd"
      ></path>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M17 17h-7v-2h4a1 1 0 001-1v-4h2v7zm-7-3h4V7H7v7h3zm-3 1h2v2a1 1 0 001 1h7a1 1 0 001-1v-7a1 1 0 00-1-1h-2V7a1 1 0 00-1-1H7a1 1 0 00-1 1v7a1 1 0 001 1z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};

export const Exclude = ({ size = "24" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        fillOpacity="0.302"
        fillRule="evenodd"
        d="M7 7h7v3h-4v4H7V7zm3 7h4v-4h3v7h-7v-3z"
        clipRule="evenodd"
      ></path>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M10.5 15H10v2h7v-7h-2v4a1 1 0 01-1 1h-3.5zm0-1H10v-4h4v4h-3.5zM9 14H7V7h7v2h-4a1 1 0 00-1 1v4zm-1 1H7a1 1 0 01-1-1V7a1 1 0 011-1h7a1 1 0 011 1v2h2a1 1 0 011 1v7a1 1 0 01-1 1h-7a1 1 0 01-1-1v-2H8z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};
