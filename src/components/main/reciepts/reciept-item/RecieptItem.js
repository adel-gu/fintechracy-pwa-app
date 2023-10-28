import React, { useState } from 'react';
import ArrowDown from '../../../../assets/arrow-down.svg';
import Report from '../../../../assets/rerport.png';

const RecieptItem = ({ price, setShowReport, id }) => {
  const [isExpand, setIsExpand] = useState(false);

  const handleClick = (id) => {
    const recieptItems = document.querySelectorAll('.reciept-item');

    recieptItems.forEach((item) => {
      item.classList.remove('border-primary');
    });

    recieptItems.forEach((item, index) => {
      if (index === id) item.classList.add('border-primary');
    });
  };

  return (
    <li
      className="border rounded-md reciept-item border-[#E9E8FF]"
      onClick={() => handleClick(id)}
    >
      <div className=" flex justify-between items-center p-2 px-3">
        <div className="flex flex-col grow">
          <h3 className="font-semibold text-[0.69rem]">Choco Land</h3>
          <p className="text-[0.564rem] text-white-gray-3">
            08-09-2023 at 23:20:05
          </p>
        </div>
        <div className="flex flex-col mr-3">
          <h3 className="font-semibold text-[0.69rem]">{price}</h3>
          <p className="text-[0.564rem] text-white-gray-3">7 items</p>
        </div>
        <button
          className={`${
            isExpand
              ? 'bg-accent text-[#fff] px-4 rounded-md text-[10.33px]'
              : 'bg-primary-op'
          } rounded-sm p-0.5 py-1`}
          onClick={() => setIsExpand((prev) => !prev)}
        >
          {isExpand ? 'Paid' : <img src={ArrowDown} alt="toggle item" />}
        </button>
      </div>
      {isExpand && (
        <div>
          <img
            src={Report}
            alt="reciept report"
            onClick={() => setShowReport(true)}
          />
        </div>
      )}
    </li>
  );
};

export default RecieptItem;
