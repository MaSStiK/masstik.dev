import "./ProjectMarkdownNav.css"

export default function ProjectMarkdownNav({ headings }) {
    function scrollToHeading(event, id) {
        event.preventDefault()

        document.getElementById(id)?.scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    }

    return (
        <nav className="project-markdown__navigation">
            <ul>
                {headings.map(heading => (
                    <li key={heading.id}>
                        <a
                            className={`project-markdown__navigation-${heading.level}`}
                            href={`#${heading.id}`}
                            onClick={event => scrollToHeading(event, heading.id)}
                        >
                            {heading.title}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
