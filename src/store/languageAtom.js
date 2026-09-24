import { atom } from "jotai"
import { BASE_LANGUAGE } from "@/utils/InitialLanguage"
import merge from "deepmerge"
import locales from "@/locales"

export const languageAtom = atom(BASE_LANGUAGE)

// Получаем текущий набор переводов
export const localeAtom = atom((get) => {
    const language = get(languageAtom)

    // Объединяем выбранную локализацию с базовой
    return merge(
        locales[BASE_LANGUAGE],
        locales[language]
    )
})