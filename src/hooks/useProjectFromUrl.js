import { useEffect, useRef } from "react"

import useActiveProjectSlug from "@/hooks/useActiveProjectSlug"
import useProjects from "@/hooks/useProjects"
import scrollToElement from "@/utils/scrollToElement"

// Открытие проекта из URL при загрузке страницы
export default function useProjectFromUrl() {
    const [, setActiveProjectSlug] = useActiveProjectSlug()
    const projects = useProjects()

    // Предотвращаем повторное открытие проекта из URL при обновлении данных
    const isInitialized = useRef(false)

    useEffect(() => {
        if (isInitialized.current || !projects.length) return

        isInitialized.current = true

        // Получение slug проекта из URL
        const params = new URLSearchParams(window.location.search)
        const projectSlug = params.get("project")

        if (!projectSlug) return

        // Проверка существования проекта
        const projectExists = projects.some(project =>
            project.slug === projectSlug
        )

        if (!projectExists) return

        // Открытие проекта
        setActiveProjectSlug(projectSlug)

        // Прокрутка к браузеру
        scrollToElement("projects")
    }, [projects, setActiveProjectSlug])
}