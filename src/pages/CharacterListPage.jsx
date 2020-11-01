import React, { useState } from 'react';
import CharacterList from '../components/Characters/CharacterList';

const CharacterListPage = () => {
  const [page, setPage] = useState(1);

  return (
    <>
      <button onClick={() => setPage(page => page - 1)}>&lt;</button>
      <button onClick={() => setPage(page => page + 1)}>&gt;</button>
      <CharacterList page={page} />
    </>
  );
};

export default CharacterListPage;
