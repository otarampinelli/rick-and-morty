import { API_URL } from "../contants";

export async function getCharacters() {
  const response = await fetch(API_URL);

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

  const response = await fetch(`${API_URL}/${id}`);

  if (!response.ok) {
    throw new Error("something is wrong here!!!");
  }

  return response.json();
}
