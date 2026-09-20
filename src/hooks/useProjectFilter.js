import { atom, useAtom } from "jotai"

const projectFilterAtom = atom("all")

export default function useProjectFilter() {
    return useAtom(projectFilterAtom)
}