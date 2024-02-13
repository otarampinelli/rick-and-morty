export interface PaginationProps {
    count: number
    selectedPage: number
    onClick: (page: number) => void
}