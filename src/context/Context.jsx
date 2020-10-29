import React, { useState } from 'react';

export const ColorContext = React.createContext();

export const ColorProvider = ({ children }) => {
  const [dkColor, setDkColor] = useState('#545E75');
  const [ltColor, setLtColor] = useState('#F7F7FF');
  
  const handleDarkColor = () => {
    if(dkColor === '#F7F7FF')
      setDkColor('#545E75');
    if(ltColor === '#545E75')
      setLtColor('F7F7FF');
  };

    
  const style = {
    dkColor,
    ltColor,
    handleDarkColor
  };

  return (
    <ColorContext.Provider value ={style}>
      {children}
    </ColorContext.Provider>
  );
};
