"use client"

import { useAtom } from "jotai"
import { languageAtom } from "@/store/language"
import { LANGUAGES } from "@/utils/InitialLanguage"
import saveLanguage from "@/actions/setLanguage"
import "./LanguageSwitcher.css"

export default function LanguageSwitcher() {
    const [language, setLanguage] = useAtom(languageAtom)

    const changeLanguage = (lang) => {
        // Меняем язык
        setLanguage(lang)

        // Сохраняем язык для SSR при следующей загрузке
        saveLanguage(lang)
    }

    return (
        <div className="flex-row language-switcher">
            {LANGUAGES.map((lang, i) => (
                <button
                    key={i}
                    className={language === lang ? "selected" : ""}
                    onClick={() => changeLanguage(lang)}
                >
                    {lang}
                </button>
            ))}
        </div>
    )
}