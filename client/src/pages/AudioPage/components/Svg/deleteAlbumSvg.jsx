import React from "react";

const DeleteAlbumSvg = () => {
  return (
    <div>
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d_562_162)">
          <rect x="4" width="40" height="40" rx="10" fill="white" />
        </g>
        <path
          d="M16.5 28.75C16.5 30.125 17.625 31.25 19 31.25H29C30.375 31.25 31.5 30.125 31.5 28.75V16.25C31.5 14.875 30.375 13.75 29 13.75H19C17.625 13.75 16.5 14.875 16.5 16.25V28.75ZM31.5 10H28.375L27.4875 9.1125C27.2625 8.8875 26.9375 8.75 26.6125 8.75H21.3875C21.0625 8.75 20.7375 8.8875 20.5125 9.1125L19.625 10H16.5C15.8125 10 15.25 10.5625 15.25 11.25C15.25 11.9375 15.8125 12.5 16.5 12.5H31.5C32.1875 12.5 32.75 11.9375 32.75 11.25C32.75 10.5625 32.1875 10 31.5 10Z"
          fill="#C62222"
        />
        <defs>
          <filter
            id="filter0_d_562_162"
            x="0"
            y="0"
            width="48"
            height="48"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
              result="effect1_dropShadow_562_162"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_562_162"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
};

export default DeleteAlbumSvg;
