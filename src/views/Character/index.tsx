import { useParams } from "react-router-dom"
import { getCharacterById } from "../../api";
import { useQuery } from "react-query";

function CharacterPage() {
    const { id } = useParams()

    const { isLoading, data } = useQuery(["characterById", id], getCharacterById);

    console.log(isLoading, data)

    return (
        <h1>Fala ai</h1>
    )
}

export default CharacterPage