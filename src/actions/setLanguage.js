"use server"
import { cookies } from "next/headers"
import { LANGUAGES } from "@/utils/InitialLanguage";

// Сохраняем выбранный язык
export default async function saveLanguage(language) {
    if (!LANGUAGES.includes(language)) {
        return
    }

    const cookieStore = await cookies()

    cookieStore.set("language", language, {
        path: "/",
        maxAge: 31536000,
        sameSite: "lax"
    })
}