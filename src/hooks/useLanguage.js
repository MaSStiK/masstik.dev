import { useAtomValue } from "jotai"
import { languageAtom } from "@/store/languageAtom"

// Возвращаем текущий язык
export default function useLanguage() {
    return useAtomValue(languageAtom)
}