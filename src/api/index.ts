export async function getCharacters() {
  const response = await fetch("https://rickandmortyapi.com/api/character");

  if (!response.ok) {
    throw new Error("something is wrong here!!!");
  }

  return response.json();
}

export async function getCharacterById({
  queryKey,
}: {
  queryKey: (string | undefined)[];
}) {
  console.log(queryKey);
  const id = queryKey[1];

  const response = await fetch(
    `https://rickandmortyapi.com/api/character/${id}`
  );

  if (!response.ok) {
    throw new Error("something is wrong here!!!");
  }

  return response.json();
}
