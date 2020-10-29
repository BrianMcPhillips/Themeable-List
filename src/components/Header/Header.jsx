import React, { useContext } from 'react';
import { Context } from '../../context/Context';

const Header = () => {
  const { handleDarkColor } = useContext(Context);

  return (
    <div>
      <button onClick={handleDarkColor}>Light or Dark</button>
    </div>
  );
};

export default Header;
