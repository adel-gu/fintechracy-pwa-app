import React from 'react';
import SearchInput from './input/SearchInput';
import SearchBtn from './search-btn/SearchBtn';

const Search = () => {
  return (
    <div className="flex gap-1">
      <SearchInput />
      <SearchBtn />
    </div>
  );
};

export default Search;
