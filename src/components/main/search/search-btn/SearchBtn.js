import React from 'react';
import SearchBtnIcon from '../../../../assets/search-btn-icon.svg';

const SearchBtn = () => {
  return (
    <button className="btn bg-primary rounded-md px-1.5">
      <img src={SearchBtnIcon} alt="search button" />
    </button>
  );
};

export default SearchBtn;
