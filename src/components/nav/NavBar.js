import React from 'react';
import Logo from './logo/Logo';
import BarCode from './barcode/BarCode';

const NavBar = ({ setShowBarCode }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light flex justify-between">
      <Logo />
      <BarCode setShowBarCode={setShowBarCode} />
    </nav>
  );
};

export default NavBar;
