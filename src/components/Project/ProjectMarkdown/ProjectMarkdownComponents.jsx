const hiddenClasses = ["language-switch"]

function shouldHide(className) {
    if (!className) return false

    return hiddenClasses.some(classNameToHide =>
        className.includes(classNameToHide)
    )
}

// Кастомный рендер элементов Markdown
const projectMarkdownComponents = {
    h1: ({ node: _node, children, ...props }) => (
        <h2 data-heading-level="h1" {...props}>
            {children}
        </h2>
    ),

    h2: ({ node: _node, children, ...props }) => (
        <h2 data-heading-level="h2" {...props}>
            {children}
        </h2>
    ),

    h3: ({ node: _node, children, ...props }) => (
        <h3 data-heading-level="h3" {...props}>
            {children}
        </h3>
    ),

    p: ({ node: _node, className, children, ...props }) => {
        if (shouldHide(className)) return null

        return (
            <p className={className} {...props}>
                {children}
            </p>
        )
    },

    div: ({ node: _node, className, children, ...props }) => {
        if (shouldHide(className)) return null

        return (
            <div className={className} {...props}>
                {children}
            </div>
        )
    },

    // TODO: Нужно как то обрабатывать некоторые ссылки заменяя их на внешние/внутренние или же открывать конкретную картинку в галереи
    a: ({ node: _node, children, href, ...props }) => (
        <a href={href} {...props}>
            {children}
        </a>
    )
}

export default projectMarkdownComponents