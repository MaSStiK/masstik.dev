import { usePathname } from "next/navigation"
import scrollToElement from "@/utils/scrollToElement"
import useLocale from "@/hooks/useLocale"

import { List } from "lucide-react"

import "./ProjectMarkdownNav.css"

export default function ProjectMarkdownNav({ headings }) {
    const locale = useLocale()
    const pathname = usePathname()

    // Прокрутка к заголовку README
    function scrollToHeading(id) {
        if (pathname === "/") {
            scrollToElement(id, "browser-content")
            return
        }

        scrollToElement(id)
    }
    
    return (
        <nav className="project-markdown__navigation">
            <div className="project-markdown__navigation-header">
                <List
                    size={18}
                    color="var(--gray)"
                />
                <span>{locale.project.markdown.contents}</span>
            </div>

            <ul>
                {headings.map((heading, index) => (
                    <li key={heading.id}>
                        <button
                            type="button"
                            className={`project-markdown__navigation-${heading.level} button-transition`}
                            onClick={() => scrollToHeading(heading.id, "browser-content")}
                        >
                            <span className="button-transition">
                                {index === 0 && "🏠 "}
                                {heading.title}
                            </span>
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
