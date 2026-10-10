import { List } from "lucide-react"
import scrollToElement from "@/utils/scrollToElement"

import "./ProjectMarkdownNav.css"

export default function ProjectMarkdownNav({ headings }) {
    return (
        <nav className="project-markdown__navigation">
            <div className="project-markdown__navigation-header">
                <List
                    size={18}
                    color="var(--gray)"
                />
                <span>Содержание</span>
            </div>

            <ul>
                {headings.map(heading => (
                    <li key={heading.id}>
                        <button
                            className={`project-markdown__navigation-${heading.level} button-transition`}
                            type="button"
                            onClick={() => scrollToElement(heading.id)}
                        >
                            {heading.title}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
