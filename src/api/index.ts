import { API_URL } from "../contants";

export async function getCharacters({
  queryKey,
}: {
  queryKey: (string | number | undefined)[];
}) {
  const page = queryKey[1] || 1;
  const searchByName = queryKey[2] || "";
  const response = await fetch(`${API_URL}?page=${page}&name=${searchByName}`);

  console.log(response)

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
  const id = queryKey[1];

  const response = await fetch(`${API_URL}/${id}`);

  if (!response.ok) {
    throw new Error("something is wrong here!!!");
  }

  return response.json();
}
