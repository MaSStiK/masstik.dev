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
                {headings.map((heading, index) => (
                    <li key={heading.id}>
                        <button
                            type="button"
                            className={`project-markdown__navigation-${heading.level} button-transition`}
                            onClick={() => scrollToElement(heading.id, "browser-content")}
                        >
                            <span className="button-transition">
                                {index === 0 && "🏠 "}
                                {heading.title}
                            </span>
                        </button>
                    </li>
                ))}
                <li>
                    <button
                        type="button"
                        className={`project-markdown__navigation-h2 button-transition`}
                        onClick={() => scrollToElement("#gallery", "browser-content")}
                    >
                        Gallery
                    </button>
                </li>
            </ul>
        </nav>
    )
}
