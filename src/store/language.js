import { atom } from "jotai"
import { BASE_LANGUAGE } from "@/utils/InitialLanguage"
import locales from "@/locales"

export const languageAtom = atom(BASE_LANGUAGE)

// Получаем текущий набор переводов
export const localeAtom = atom((get) => {
    const language = get(languageAtom)

    return {
        ...locales[BASE_LANGUAGE],
        ...locales[language]
    }
})