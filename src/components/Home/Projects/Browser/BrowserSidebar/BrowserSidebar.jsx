import "./BrowserSidebar.css"

export default function BrowserSidebar() {
    return (
        <aside className="browser__sidebar">
            <button className="browser__sidebar-button--selected">
                <span>Все</span>
                <span>30</span>
            </button>
            <button>
                <span>Коммерческие</span>
                <span>2</span>
            </button>
            <button>
                <span>Pet-Проекты</span>
                <span>8</span>
            </button>
            <button>
                <span>Учебные</span>
                <span>4</span>
            </button>
            <button>
                <span>Тестовые</span>
                <span>6</span>
            </button>
            <button>
                <span>Другие</span>
                <span>10</span>
            </button>
        </aside>
    )
}
