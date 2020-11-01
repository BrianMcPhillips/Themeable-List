export const getCharacters = async(page = 1) => {
  const res = await fetch(
    // eslint-disable-next-line max-len
    `https://last-airbender-api.herokuapp.com/api/v1/characters?perPage=10&page=${page}`
  );
  const json = await res.json();
  if(!res.ok) throw 'Bad API call unable to fetch';
  
  return json.map(character => ({
    id: character._id,
    name: character.name,
    image: character.photoUrl
  }));
};

