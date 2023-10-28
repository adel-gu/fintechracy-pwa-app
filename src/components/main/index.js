import React from 'react';
import Search from './search';
import Receipts from './reciepts';

const Main = ({ setShowReport }) => {
  return (
    <main className="font-inter pt-5">
      <section>
        <h1 className="text-[1.086rem] font-bold">
          Welcome To <span className="text-primary">FTR Client</span>
        </h1>
        <p className="text-white-gray-1 text-[0.648rem] pt-1">
          Let Store Owners Scan Your Barcode
        </p>
      </section>
      <section className="my-5">
        <Search />
      </section>
      <section>
        <Receipts setShowReport={setShowReport} />
      </section>
    </main>
  );
};

export default Main;
