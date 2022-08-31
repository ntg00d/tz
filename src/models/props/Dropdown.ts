export interface IDropdownProps {
    categories: string[]
    category: string
    categoryHandle: (el: string) => void
}