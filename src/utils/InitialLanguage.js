// Языки, которые поддерживает сайт
export const LANGUAGES = ["en", "ru", "fr"]

// Язык по умолчанию
export const BASE_LANGUAGE = "en"

export default function getInitialLanguage(savedLanguage, acceptLanguage) {
    // Сначала используем сохранённый язык
    if (LANGUAGES.includes(savedLanguage)) {
        return savedLanguage
    }

    // Если сохранённого нет - используем язык браузера
    const systemLanguage = acceptLanguage?.toLowerCase().split(",")[0].split("-")[0]

    return LANGUAGES.includes(systemLanguage)
        ? systemLanguage
        : BASE_LANGUAGE
}