import React from 'react';
import PropTypes from 'prop-types';
import { useColorTheme } from '../../hooks/characterData';

const CharacterItem = ({ name, image }) => {
  const { colorTheme } = useColorTheme();
  return <figure className={colorTheme}>
    <img src={image} alt={name} />
    <figcaption>{name}</figcaption>
  </figure>;
};

CharacterItem.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

export default CharacterItem;

