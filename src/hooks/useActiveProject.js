import { atom, useAtom } from "jotai"

const activeProjectAtom = atom(null)

export default function useActiveProject() {
    return useAtom(activeProjectAtom)
}