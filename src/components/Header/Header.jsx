import React from 'react';
import { useColorTheme } from '../../hooks/characterData';


const Header = () => {
  const { handleDarkColor } = useColorTheme();

  return (
    <div>
      <button onClick={handleDarkColor}>Light or Dark</button>
    </div>
  );
};

export default Header;
