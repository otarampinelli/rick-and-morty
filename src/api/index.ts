import { API_URL } from "../contants";
import { throwError } from "../utils";

export async function getCharacters({
  queryKey,
}: {
  queryKey: (string | number | undefined)[];
}) {
  const page = queryKey[1] || 1;
  const searchByName = queryKey[2] || "";
  const response = await fetch(`${API_URL}?page=${page}&name=${searchByName}`);

  if (!response.ok) {
    throwError()
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
    throwError()
  }

  return response.json();
}

