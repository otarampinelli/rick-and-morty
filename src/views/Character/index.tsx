import { useParams } from "react-router-dom"
import { getCharacterById } from "../../api";
import { useQuery } from "react-query";
import BasicPage from "../../components/BasicPage";

function CharacterPage() {
    const { id } = useParams()

    const { isLoading, data } = useQuery(["characterById", id], getCharacterById);

    console.log(isLoading, data)

    return (
        <BasicPage>
        <h1>Fala ai</h1>
        </BasicPage>
    )
}

export default CharacterPage