import { atom, useAtom } from "jotai"

const activeProjectSlugAtom = atom("hedgehog-rp")

export default function useActiveProjectSlug() {
    return useAtom(activeProjectSlugAtom)
}