import { useEffect, useState } from 'react';
import { getCharacters } from '../services/lastAirBenderApi';

export const useCharacters = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getCharacters()
      .then(jsonCharacters => setCharacters(jsonCharacters)); 
  }, []);

  return {
    characters
  };
};
