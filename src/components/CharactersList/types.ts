export type ChracterInfoType = {
    counter: number
    pages: number
    next?: string | null
    prev?: string | null
}

export type LocationAndOriginType = {
    name: string
    url: string
}

export type CharacterResultType = {
    created: string
    episode: string[]
    gender: string
    id: string | number
    image: string
    name: string
    location: LocationAndOriginType
    origin: LocationAndOriginType
    species: string
    status: string
    type?: string
    url: string
}

export interface CharacterListProps {
    info?: ChracterInfoType
    results: CharacterResultType[]
}