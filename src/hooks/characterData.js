import { useEffect, useState } from 'react';
import { getCharacters } from '../services/lastAirBenderApi';
import { useContext } from 'react';
import { ColorContext } from '../context/ColorContext';

export const useCharacters = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const { dkColor } = useColorTheme();
  useEffect(() => {
    getCharacters()
      .then(jsonCharacters => setCharacters(jsonCharacters))
      .finally(() => setLoading(false)); 
  }, [dkColor]);

  return {
    characters,
    loading
  };
};

export const useColorTheme = () => {
  const { dkColor, handleDarkColor } = useContext(ColorContext);
  return { dkColor, handleDarkColor };
};
