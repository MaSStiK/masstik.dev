import { useEffect, useRef } from "react"

import useActiveProjectSlug from "@/hooks/useActiveProjectSlug"
import useCategoryFilter from "@/hooks/useCategoryFilter"
import useProjects from "@/hooks/useProjects"

import scrollToElement from "@/utils/scrollToElement"
import categories from "@/data/categories"

// Синхронизация проекта и категории с URL
export default function useBrowserUrlSync() {
    const [activeProjectSlug, setActiveProjectSlug] = useActiveProjectSlug()
    const [categoryFilter, setCategoryFilter] = useCategoryFilter()
    const projects = useProjects()

    const previousState = useRef(null)

    useEffect(() => {
        const url = new URL(window.location.href)

        // Получение проекта или категории из URL при загрузке страницы
        if (!previousState.current) {
            const projectSlug = url.searchParams.get("project")
            const category = url.searchParams.get("category")

            const project = projects.find(project =>
                project.slug === projectSlug
            )

            // Сохранение начального состояния
            previousState.current = {
                activeProjectSlug,
                categoryFilter
            }

            if (project) {
                // Открытие проекта с приоритетом над категорией
                setActiveProjectSlug(project.slug)
                setCategoryFilter(project.type)

                url.searchParams.delete("category")

                scrollToElement("projects")
            } else if (category && Object.hasOwn(categories, category)) {
                // Открытие категории из URL
                setCategoryFilter(category)

                url.searchParams.delete("project")

                scrollToElement("projects")
            } else {
                // Удаление некорректных параметров
                url.searchParams.delete("project")
                url.searchParams.delete("category")
            }

            if (url.href !== window.location.href) {
                window.history.replaceState(window.history.state, "", url)
            }

            return
        }

        // Проверка изменения состояния
        const previous = previousState.current

        if (
            previous.activeProjectSlug === activeProjectSlug &&
            previous.categoryFilter === categoryFilter
        ) return

        previousState.current = {
            activeProjectSlug,
            categoryFilter
        }

        // Проверка необходимости прокрутки
        const categoryChanged = previous.categoryFilter !== categoryFilter

        const shouldScroll = !activeProjectSlug &&
            categoryChanged &&
            url.searchParams.get("category") !== (
                categoryFilter === "all" ? null : categoryFilter
            )

        // Обновление URL
        if (activeProjectSlug) {
            url.searchParams.set("project", activeProjectSlug)
            url.searchParams.delete("category")
        } else {
            url.searchParams.delete("project")

            if (categoryFilter === "all") {
                url.searchParams.delete("category")
            } else {
                url.searchParams.set("category", categoryFilter)
            }
        }

        if (url.href !== window.location.href) {
            window.history.replaceState(window.history.state, "", url)
        }

        // Прокрутка при смене категории
        if (shouldScroll) {
            scrollToElement("projects")
        }
    }, [
        projects,
        activeProjectSlug,
        categoryFilter,
        setActiveProjectSlug,
        setCategoryFilter
    ])
}