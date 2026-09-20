import clsx from "clsx"

import "./HeroBlock.css"

export default function HeroBlock({
    className = "",
    title = "",
    transparent = false,
    children
}) {
    const blockClasses = clsx(
        "hero-block",
        className,
        transparent && "hero-block--transparent"
    )

    return (
        <div className={blockClasses}>
            <div className="hero-block__header">
                <span className="text-gray">{title}</span>
            </div>
            <div className="hero-block__inner">
                {children}
            </div>
        </div>
    )
}
