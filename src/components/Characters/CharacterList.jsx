import React, { useContext } from 'react';
import { Context } from '../../context/Context';
import { useCharacters } from '../../hooks/characterData';
import CharacterItem from './CharacterItem';


const CharacterList = () => {
  const { dkColor, ltColor } = useContext(Context);
  const { characters, loading } = useCharacters();

  if(loading) return <h1>Loading!</h1>;
  
  const style = {
    darkColor: dkColor,
    lightColor: ltColor
  };

  
  const characterElements = characters.map(character => (
    <li key={character.name}>
      <CharacterItem {...character}/>
    </li>
  ));

  return (
    <div style={style}>
      <ul>
        {characterElements}
      </ul>
    </div>
  );
};

export default CharacterList;
