import { atom, useAtom } from "jotai"

const categoryFilterAtom = atom("all")

export default function useCategoryFilter() {
    return useAtom(categoryFilterAtom)
}