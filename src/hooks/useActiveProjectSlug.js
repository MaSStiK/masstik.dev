import { atom, useAtom } from "jotai"

const activeProjectSlugAtom = atom("red-chat")

export default function useActiveProjectSlug() {
    return useAtom(activeProjectSlugAtom)
}