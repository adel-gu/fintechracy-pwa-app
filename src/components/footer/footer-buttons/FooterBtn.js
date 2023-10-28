import React from 'react';

const FooterBtn = ({ name, link, src }) => {
  return (
    <button className="flex flex-col items-center font-inter text-[0.497rem] font-semibold text-white-gray-4 grow">
      <img src={src} alt={name} />
      <span className="mt-1.5">{name}</span>
    </button>
  );
};

export default FooterBtn;
