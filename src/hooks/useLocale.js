"use client"
import { useAtomValue } from "jotai"
import { localeAtom } from "@/store/language"

// Возвращаем текущую локаль
export default function useLocale() {
    return useAtomValue(localeAtom)
}