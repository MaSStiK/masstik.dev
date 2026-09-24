"use client"
import { Provider } from "jotai"
import { useHydrateAtoms } from "jotai/utils"
import { languageAtom } from "@/store/languageAtom"
import { projectsAtom } from "@/store/projectsAtom"

function HydrateAtoms({ language, projects, children }) {

    // Устанавливаем данные, полученные с сервера
    useHydrateAtoms([
        [
            languageAtom,
            language
        ],
        [
            projectsAtom,
            projects
        ]
    ])

    return children

}

export default function JotaiProvider({ language, projects, children }) {

    return (
        <Provider>
            <HydrateAtoms
                language={language}
                projects={projects}
            >
                {children}
            </HydrateAtoms>
        </Provider>
    )

}