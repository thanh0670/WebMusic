import React, { useState } from "react";

const TimSvg = (props) => {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
    console.log(props.id);
  };

  return (
    <button
      onClick={toggleLike}
      className="w-[40px] h-[40px] flex items-center justify-centershadow"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 37 32"
        width="40"
        height="40"
        fill={liked ? "red" : "#ffffff"} // 🔥 đỏ tươi sáng
        stroke={"#808184"}
        strokeWidth="1.5"
      >
        <path d="M33.582,2.483c-1.776-1.56-4.077-2.418-6.481-2.418c-2.767,0-5.49,1.134-7.472,3.112l-0.781,0.778 c-0.188,0.188-0.508,0.188-0.697,0l-1.027-1.024C15.23,1.041,12.711,0,10.032,0C7.415,0,4.938,1,3.059,2.814 c-1.87,1.805-2.911,4.287-2.933,6.988c-0.023,2.824,1.095,5.573,3.067,7.541l14.252,14.22C17.728,31.845,18.103,32,18.5,32 s0.772-0.155,1.055-0.437L34.061,17.09c1.952-1.948,3.021-4.645,2.934-7.399C36.906,6.897,35.693,4.338,33.582,2.483z" />
      </svg>
    </button>
  );
};

export default TimSvg;
