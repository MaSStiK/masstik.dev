import { atom, useAtom } from "jotai"

const activeProjectSlugAtom = atom(null)

export default function useActiveProjectSlug() {
    return useAtom(activeProjectSlugAtom)
}