import React from 'react';
import barCodeWhite from '../../../assets/white-theme/bar-code.svg';

const BarCode = ({ setShowBarCode }) => {
  return (
    <button
      className="border border-[#E9E8FF] rounded-md py-1.5 px-3"
      onClick={() => {
        setShowBarCode(true);
      }}
    >
      <img src={barCodeWhite} alt="barcode" />
    </button>
  );
};

export default BarCode;
