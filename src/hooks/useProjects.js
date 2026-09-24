import { useAtomValue } from "jotai"
import { projectsAtom } from "@/store/projectsAtom"

export default function useProjects() {
    const projects = useAtomValue(projectsAtom)
    return projects

}