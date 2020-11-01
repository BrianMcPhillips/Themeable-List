import React from 'react';
import { useCharacters, useColorTheme } from '../../hooks/characterData';
import CharacterItem from './CharacterItem';
import css from './CharacterList.css';
import PropTypes from 'prop-types';

const CharacterList = ({ page }) => {
  const { dkColor } = useColorTheme();
  const { characters, loading } = useCharacters(page);

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

CharacterList.propTypes = {
  page: PropTypes.number
};

export default CharacterList;
