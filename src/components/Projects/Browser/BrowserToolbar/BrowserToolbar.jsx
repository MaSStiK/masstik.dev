import { ChevronLeft, RefreshCw, Search } from "lucide-react"
import { LockIcon } from "@/icons"
import useLocale from "@/hooks/useLocale"
import useCategoryFilter from "@/hooks/useCategoryFilter"
import useActiveProject from "@/hooks/useActiveProject"

import "./BrowserToolbar.css"

export default function BrowserToolbar() {
    const [categoryFilter, setCategoryFilter] = useCategoryFilter()
    const [activeProject, setActiveProject] = useActiveProject()
    const locale = useLocale()

    // Отображение выбранной категории
    const categoryQuery = categoryFilter !== "all"
        ? `?category=${categoryFilter}`
        : ""

    // Отображаем проект, если он выбран, иначе категорию
    const projectPath = activeProject
        ? `/${activeProject.slug}`
        : categoryQuery

    // Кнопка Назад
    function goBack() {
        // Если открыт проект - закрываем его и возвращаемся в выбранную категорию
        if (activeProject) {
            setActiveProject(null)
            return
        }

        // Если выбрана категория - сбрасываем её и возвращаемся ко всем проектам
        if (categoryFilter !== "all") {
            setCategoryFilter("all")
        }
    }

    return (
        <div className="browser__toolbar">
            <div className="browser__toolbar-dots">
                <div className="browser__toolbar-dot browser__toolbar-dot--red"></div>
                <div className="browser__toolbar-dot browser__toolbar-dot--yellow"></div>
                <div className="browser__toolbar-dot browser__toolbar-dot--green"></div>
            </div>

            <div className="browser__address">
                <button
                    className="button-transition flex-center browser__toolbar-button"
                    aria-label={locale.projects.toolbar.back}
                    onClick={goBack}
                >
                    <ChevronLeft size={16} />
                </button>
                <button
                    className="button-transition flex-center browser__toolbar-button"
                    aria-label={locale.projects.toolbar.refresh}
                >
                    <RefreshCw size={16} />
                </button>
                <div className="browser__bar browser__address-bar">
                    <LockIcon size={16} />
                    <span>masstik.dev/projects{projectPath}</span>
                </div>
            </div>

            <div className="browser__bar browser__search-bar">
                <Search size={16} />
                <input
                    type="text"
                    placeholder={locale.projects.toolbar.search}
                />
            </div>
        </div>
    )
}
