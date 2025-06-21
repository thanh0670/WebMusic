import React from "react";

const NutChinhSuaSvg = () => {
  return (
    <div>
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d_562_158)">
          <rect
            x="4"
            width="40"
            height="40"
            rx="10"
            fill="#D76868"
            fillOpacity="0.4"
            shapeRendering="crispEdges"
          />
        </g>
        <path
          d="M12 32V26.3333L29.6 8.76667C29.8667 8.52222 30.1613 8.33333 30.484 8.2C30.8067 8.06667 31.1453 8 31.5 8C31.8547 8 32.1991 8.06667 32.5333 8.2C32.8676 8.33333 33.1564 8.53333 33.4 8.8L35.2333 10.6667C35.5 10.9111 35.6947 11.2 35.8173 11.5333C35.94 11.8667 36.0009 12.2 36 12.5333C36 12.8889 35.9391 13.228 35.8173 13.5507C35.6956 13.8733 35.5009 14.1676 35.2333 14.4333L17.6667 32H12ZM31.4667 14.4L33.3333 12.5333L31.4667 10.6667L29.6 12.5333L31.4667 14.4Z"
          fill="white"
        />
        <defs>
          <filter
            id="filter0_d_562_158"
            x="0"
            y="0"
            width="48"
            height="48"
            filterUnits="userSpaceOnUse"
            colorInterpolation-filters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_562_158"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_562_158"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
};

export default NutChinhSuaSvg;
