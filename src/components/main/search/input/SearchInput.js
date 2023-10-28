import React from 'react';
import SearchIcon from '../../../../assets/white-theme/search-icon.svg';

const SearchInput = () => {
  return (
    <div className="flex rounded-md bg-white-gray-5 pl-2 gap-3 grow">
      <img src={SearchIcon} alt="Search Icon" />
      <input
        className="bg-white-gray-5 font-medium text-[0.621rem] py-3 rounded-md grow "
        type="text"
        placeholder="Search for receipt here"
      />
    </div>
  );
};

export default SearchInput;
