import React from "react";

const MyCustomSVG = () => {
  return (
    <div>
      <div className="custom-svg-wrapper">
        <svg
          width="24"
          height="24"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="cursor-pointer hover:scale-110 transition-transform"
        >
          <path
            d="M5 25V18.75H6.25V22.865L10.75 18.365L11.635 19.25L7.135 23.75H11.25V25H5ZM19.25 11.635L18.365 10.75L22.865 6.25H18.75V5H25V11.25H23.75V7.135L19.25 11.635Z"
            fill="white"
          />
        </svg>
      </div>
    </div>
  );
};

export default MyCustomSVG;
