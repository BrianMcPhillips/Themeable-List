export const getCharacters = async() => {
  const res = await fetch('https://xfiles-api.herokuapp.com/api/v1/characters');
  const json = await res.json();
  if(!res.ok) throw 'Bad API call unable to fetch';
  
  return json.results.map(character => ({
    id: character._id,
    name: character.name,
    image: character.photoUrl
  }));
};

