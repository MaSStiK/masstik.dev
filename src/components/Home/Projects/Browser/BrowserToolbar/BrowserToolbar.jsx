import "./BrowserToolbar.css"

export default function BrowserToolbar() {
    return (
        <div className="browser__toolbar">
            <div className="browser__toolbar-dots">
                <div className="browser__toolbar-dot browser__toolbar-dot--red"></div>
                <div className="browser__toolbar-dot browser__toolbar-dot--yellow"></div>
                <div className="browser__toolbar-dot browser__toolbar-dot--green"></div>
            </div>
        </div>
    )
}
