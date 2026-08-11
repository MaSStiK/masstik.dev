import { cookies, headers } from "next/headers"
import {
    comfortaa,
    balsamiqSans,
    asinastra,
    _viewport,
    _metadata
} from "./metadata"
import "@/app/styles/style.css"

import JotaiProvider from "@/components/JotaiProvider"
import getInitialLanguage from "@/utils/InitialLanguage"

export const metadata = _metadata
export const viewport = _viewport

export default async function RootLayout({ children }) {
    const cookieStore = await cookies()
    const headersList = await headers()

    // Получаем ранее выбранный язык
    const savedLanguage = cookieStore.get("language")?.value

    // Получаем язык браузера при первом посещении
    const acceptLanguage = headersList.get("accept-language")

    const language = getInitialLanguage(savedLanguage, acceptLanguage)

    return (
        <html lang={language} className={`${comfortaa.variable} ${balsamiqSans.variable} ${asinastra.variable}`}>
            <body>
                {/*  */}
                <JotaiProvider language={language}>
                    {children}
                </JotaiProvider>
            </body>
        </html>
    )
}