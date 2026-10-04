const hiddenClasses = ["language-switch"]

function shouldHide(className) {
    if (!className) return false

    return hiddenClasses.some(classNameToHide =>
        className.includes(classNameToHide)
    )
}

// Кастомный рендер элементов Markdown
const projectMarkdownComponents = {
    h1: ({ children, ...props }) => (
        <h2 className="project-markdown__title" {...props}>
            {children}
        </h2>
    ),

    h2: ({ children, ...props }) => (
        <h2 className="project-markdown__heading" {...props}>
            {children}
        </h2>
    ),

    p: ({ className, children, ...props }) => {
        if (shouldHide(className)) return null

        return (
            <p className={className} {...props}>
                {children}
            </p>
        )
    },

    div: ({ className, children, ...props }) => {
        if (shouldHide(className)) return null

        return (
            <div className={className} {...props}>
                {children}
            </div>
        )
    },

    a: ({ children, href, ...props }) => (
        <a href={href} {...props}>
            {children}
        </a>
    )
}

export default projectMarkdownComponents