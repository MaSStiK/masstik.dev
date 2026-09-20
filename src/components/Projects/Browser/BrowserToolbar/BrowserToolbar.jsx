import { ChevronLeft, RefreshCw, Search } from "lucide-react"
import { LockIcon } from "@/icons"
import useLocale from "@/hooks/useLocale"
import useProjectFilter from "@/hooks/useProjectFilter"

import "./BrowserToolbar.css"

export default function BrowserToolbar() {
    const [projectFilter] = useProjectFilter()
    const locale = useLocale()

    // Отображение выбранной категории
    const categoryQuery = projectFilter !== "all" && `?category=${projectFilter}`

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
                    <span>masstik.dev/projects{categoryQuery}</span>
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
