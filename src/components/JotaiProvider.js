"use client"
import { Provider } from "jotai"
import { useHydrateAtoms } from "jotai/utils"
import { languageAtom } from "@/store/language"

function HydrateAtoms({ language, children }) {
    // Устанавливаем язык, полученный с сервера
    useHydrateAtoms([
        [
            languageAtom,
            language
        ]
    ])

    return children
}

export default function JotaiProvider({ language, children }) {
    return (
        <Provider>
            <HydrateAtoms language={language}>
                {children}
            </HydrateAtoms>
        </Provider>
    )
}