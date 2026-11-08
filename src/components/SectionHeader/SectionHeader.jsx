import clsx from "clsx"

import "./SectionHeader.css"

export default function SectionHeader({ className, accentColor, header, number }) {
    return (
        <div
            className={clsx("section-header", className)}
            style={{ "--accent-color": `var(${accentColor})` }}
        >
            <span>~/{header}</span>
            <hr />
            <span>{number}</span>
        </div>
    )
}
