import { useEffect, useState } from 'react';
import { getCharacters } from '../services/lastAirBenderApi';

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
