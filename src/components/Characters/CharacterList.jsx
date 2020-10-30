import React from 'react';
import { useCharacters, useColorTheme } from '../../hooks/characterData';
import CharacterItem from './CharacterItem';
import css from './CharacterList.css';

const CharacterList = () => {
  const { dkColor } = useColorTheme();
  const { characters, loading } = useCharacters();

  if(loading) return <h1>Loading!</h1>;
  
  const characterElements = characters.map(character => (
    <li key={character.name}>
      <CharacterItem {...character}/>
    </li>
  ));

  return (
    <div>
      <ul className=
        {`${css.CharacterList} ${dkColor === 'darkColor' ? 
          css.darkColor : css.lightColor}`}>
        {characterElements}
      </ul>
    </div>
  );
};

export default CharacterList;
