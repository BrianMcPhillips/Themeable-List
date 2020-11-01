export const getCharacters = async(page = 1) => {
  const res = await fetch(
    `https://last-airbender-api.herokuapp.com/api/v1/characters?page=${page}`
  );
  const json = await res.json();
  if(!res.ok) throw 'Bad API call unable to fetch';
  
  return json.map(character => ({
    id: character._id,
    name: character.name,
    image: character.photoUrl
  }));
};

