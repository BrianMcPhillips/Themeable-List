import React, { useContext } from 'react';
import { Context } from '../../context/Context';
import { useCharacters } from '../../hooks/characterData';
import CharacterItem from './CharacterItem';


const CharacterList = () => {
  const { dkColor, ltColor } = useContext(Context);

  const style = {
    darkColor: dkColor,
    lightColor: ltColor
  };

  const characters = useCharacters();
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
