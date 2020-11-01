import React from 'react';
import { render } from '@testing-library/react';
import CharacterItem from './CharacterItem';
import { ColorProvider } from '../../context/ColorContext';

describe('CharacterItem component', () => {
  it('should render a Character to the page', () => {
    const { asFragment } = render(
      <ColorProvider>
        <CharacterItem 
          name="Test name"
          image="http://www.placecage.com/600/600"
        />
      </ColorProvider>);

    expect(asFragment()).toMatchSnapshot();
  });
});
