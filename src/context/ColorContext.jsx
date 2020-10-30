import React, { useState } from 'react';

export const ColorContext = React.createContext();

export const ColorProvider = ({ children }) => {
  const [dkColor, setDkColor] = useState('lightColor');
  
  
  const handleDarkColor = () => {
    if(dkColor === 'lightColor')
      setDkColor('darkColor');
    if(dkColor === 'darkColor')
      setDkColor('lightColor');

  };

    
  const style = {
    dkColor,
    handleDarkColor
  };

  return (
    <ColorContext.Provider value ={style}>
      {children}
    </ColorContext.Provider>
  );
};
