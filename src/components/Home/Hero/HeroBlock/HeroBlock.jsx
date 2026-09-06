import { useState } from "react"
import clsx from "clsx"
import { Sparkle, Sparkles } from "lucide-react"

import "./HeroBlock.css"

export default function HeroBlock({
    className = "",
    title = "",
    children
}) {
    const [isBackgroundTransparent, setIsBackgroundTransparent] = useState(true)

    const blockClasses = clsx(
        "hero-block",
        className,
        isBackgroundTransparent && "hero-block--transparent"
    )

    const toggleClasses = clsx(
        "hero-block__header-toggle",
        !isBackgroundTransparent && "hero-block__header-toggle--active"
    )

    return (
        <div className={blockClasses}>
            <div className="flex-row hero-block__header">
                <span className="text-gray">{title}</span>
                <button
                    className={toggleClasses}
                    onClick={() => setIsBackgroundTransparent(prev => !prev)}
                >
                    {isBackgroundTransparent
                        ? <Sparkles size={20} strokeWidth={1.5} />
                        : <Sparkle size={20} strokeWidth={1.5} />
                    }
                </button>
            </div>
            <div className="hero-block__inner">
                {children}
            </div>
        </div>
    )
}
