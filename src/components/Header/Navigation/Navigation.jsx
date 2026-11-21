"use client"

import { useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import useLocale from "@/hooks/useLocale"
import scrollToElement from "@/utils/scrollToElement"

import "./Navigation.css"

export default function Navigation() {
    const locale = useLocale()
    const pathname = usePathname()

    // Прокрутка к секции после перехода на главную страницу
    useEffect(() => {
        if (pathname !== "/") return

        const sectionId = sessionStorage.getItem("scrollToSection")
        if (!sectionId) return

        sessionStorage.removeItem("scrollToSection")

        requestAnimationFrame(() => {
            scrollToElement(sectionId)
        })
    }, [pathname])

    // Переход к секции на главной странице
    function navigateToSection(event, id) {
        if (pathname === "/") {
            event.preventDefault()
            scrollToElement(id)
            return
        }

        // Сохранение секции для прокрутки после перехода
        sessionStorage.setItem("scrollToSection", id)
    }

    return (
        <nav className="navigation">
            <ul className="flex-row gap-1">
                <li>
                    <Link
                        href="/"
                        className="button-transition"
                        onClick={event => navigateToSection(event, "about")}
                    >
                        {locale.header.nav.about_me}
                    </Link>
                </li>
                <li>
                    <Link
                        href="/"
                        className="button-transition"
                        onClick={event => navigateToSection(event, "projects")}
                    >
                        {locale.header.nav.projects}
                    </Link>
                </li>
                <li>
                    <Link
                        href="/"
                        className="button-transition"
                        onClick={event => navigateToSection(event, "stack")}
                    >
                        {locale.header.nav.stack}
                    </Link>
                </li>
                <li>
                    <Link
                        href="/"
                        className="button-transition"
                        onClick={event => navigateToSection(event, "contacts")}
                    >
                        {locale.header.nav.contacts}
                    </Link>
                </li>
            </ul>
        </nav>
    )
}