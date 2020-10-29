import React, { useState } from 'react';

export const Context = React.createContext();

export const Provider = ({ children }) => {
  const [dkColor, setDkColor] = useState('#545E75');
  const [ltColor, setLtColor] = useState('#F7F7FF');
  
  const handleDarkColor = () => {
    if(dkColor === '#F7F7FF')
      setDkColor('#545E75');
    if(ltColor === '#545E75')
      setLtColor('F7F7FF');
  };
  return (
    <Context.Provider value ={{ dkColor, ltColor, handleDarkColor }}>
      {children}
    </Context.Provider>
  );
};
