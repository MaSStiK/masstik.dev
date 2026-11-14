import { useEffect, useRef } from "react"

import useCategoryFilter from "@/hooks/useCategoryFilter"
import scrollToElement from "@/utils/scrollToElement"

import categories from "@/data/categories"

// Синхронизация категории с URL
export default function useCategoryUrlSync() {
    const [categoryFilter, setCategoryFilter] = useCategoryFilter()

    // Предотвращаем повторное чтение категории из URL при изменении состояния
    const isInitialized = useRef(false)

    useEffect(() => {
        const url = new URL(window.location.href)
        const projectSlug = url.searchParams.get("project")

        // Получение категории из URL при загрузке страницы
        if (!isInitialized.current) {
            isInitialized.current = true

            // Проект имеет приоритет над категорией
            if (projectSlug) return

            const category = url.searchParams.get("category")

            // Проверка существования категории
            if (!category || !Object.hasOwn(categories, category)) return

            setCategoryFilter(category)

            // Прокрутка к браузеру
            scrollToElement("projects")
            return
        }

        // Обновление категории в URL
        if (categoryFilter === "all") {
            url.searchParams.delete("category")
        } else {
            url.searchParams.set("category", categoryFilter)
        }

        window.history.replaceState(window.history.state, "", url)

        // Прокрутка к браузеру, если проект не открыт
        if (!projectSlug) {
            scrollToElement("projects")
        }
    }, [categoryFilter, setCategoryFilter])
}