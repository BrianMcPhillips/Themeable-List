import React from 'react';
import { cleanup, render } from '@testing-library/react';
import CharacterList from './CharacterList';
import { getCharacters } from '../../services/lastAirBenderApi';
import { useColorTheme, useCharacters } from '../../hooks/characterData';

jest.mock('../../services/lastAirBenderApi');
jest.mock('../../hooks/characterData');
describe('CharacterList component', () => {
  afterEach(() => cleanup());
  it.skip('renders a CharacterList', async() => {
    useColorTheme.mockResolvedValue('dkColor');
    useCharacters.mockResolvedValue('characters');
    getCharacters.mockResolvedValue([
      {
        name: 'Test name',
        image: 'http://www.placecage.com/600/600'
      },
      {
        name: 'Test name 2',
        image: 'http://www.placecage.com/400/600'
      }
    ]);
    const { asFragment } = render(<CharacterList />);
    expect(asFragment()).toMatchSnapshot();

  });
});
