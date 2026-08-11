import "./Navigation.css"

export default function Navigation() {
    return (
        <nav>
            <ul className="flex-row gap-1">
                <li>
                    <button>Обо мне</button>
                </li>
                <li>
                    <button>Проекты</button>
                </li>
                <li>
                    <button>Стек</button>
                </li>
                <li>
                    <button>Контакты</button>
                </li>
            </ul>
        </nav>
    )
}
