import React from 'react';

const PrevImgMobile = ({ prevItem }) => {
  return (
    <span className="prev-img-mobile" onClick={prevItem}>
      <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M11 1 3 9l8 8"
          stroke="#1D2026"
          strokeWidth="3"
          fill="none"
          fillRule="evenodd"
        ></path>
      </svg>
    </span>
  );
};

export default PrevImgMobile;
