import { useEffect, useState } from 'react';
import { getCharacters } from '../services/lastAirBenderApi';
import { useContext } from 'react';
import { Context } from '../context/context';

export const useCharacters = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCharacters()
      .then(jsonCharacters => setCharacters(jsonCharacters))
      .finally(() => setLoading(false)); 
  }, []);

  return {
    characters,
    loading
  };
};

export const useColorTheme = () => {
  const { colorTheme, handleDarkColor } = useContext(Context);
  return { colorTheme, handleDarkColor };
};
