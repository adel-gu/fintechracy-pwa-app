import React from 'react';
import ArrowRight from '../../../assets/white-theme/arrow-right.svg';
import RecieptItem from './reciept-item/RecieptItem';

const itemPrices = ['60.00', '50.00', '50.00', '50.00', '50.00'];

const Receipts = ({ setShowReport }) => {
  return (
    <div>
      <div className="flex items-center mb-5">
        <h2 className="font-semibold text-[0.821rem] grow">My Receipts</h2>
        <button className="flex items-center gap-1">
          <span className="font-semibold text-[0.576rem]">See all</span>
          <img src={ArrowRight} alt="see all" />
        </button>
      </div>
      <ul className="flex flex-col gap-2 px-1">
        {itemPrices.map((price, index) => (
          <RecieptItem
            key={`${price}${index}`}
            price={price}
            setShowReport={setShowReport}
            id={index}
          />
        ))}
      </ul>
    </div>
  );
};

export default Receipts;
