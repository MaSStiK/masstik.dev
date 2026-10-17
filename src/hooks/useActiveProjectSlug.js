import { atom, useAtom } from "jotai"

const activeProjectSlugAtom = atom("")

export default function useActiveProjectSlug() {
    return useAtom(activeProjectSlugAtom)
}