import { useState } from "react"

import "./HeroBlock.css"

export default function HeroBlock({
    className = "",
    title = "",
    children
}) {
    const [isBackgroundTransparent, setIsBackgroundTransparent] = useState(false)

    return (
        <div className={`hero-block ${className}`}>
            <div className="hero-block__header">
                <span className="text-gray">{title}</span>
            </div>
            <div className="hero-block__inner">
                {children}
            </div>
        </div>
    )
}
