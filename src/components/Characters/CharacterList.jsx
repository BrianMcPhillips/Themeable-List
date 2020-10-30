import React from 'react';
import { useCharacters, useColorTheme } from '../../hooks/characterData';
import CharacterItem from './CharacterItem';
import css from './CharacterList.css';


const CharacterList = () => {
  const { colorTheme } = useColorTheme();
  const { characters, loading } = useCharacters();

  if(loading) return <h1>Loading!</h1>;


  
  const characterElements = characters.map(character => (
    <li key={character.name}>
      <CharacterItem {...character}/>
    </li>
  ));

  return (
    <div styles={colorTheme}>
      <ul className={css.CharacterList}>
        {characterElements}
      </ul>
    </div>
  );
};

export default CharacterList;
