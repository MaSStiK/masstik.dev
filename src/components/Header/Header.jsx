import LanguageSwitcher from "./LanguageSwitcher/LanguageSwitcher"

import "./Header.css"

export default function Header() {
    return (
        <header className="flex-row">
            <span>
                <span className="fs-xlarge text-purple">{"<"}</span>
                <span className="fs-xlarge fw-bold"> MaSStiK </span>
                <span className="fs-xlarge text-purple">{"/>"}</span>
                </span>
            <nav>
                <ul className="flex-row gap-1">
                    <li>Обо мне</li>
                    <li>Проекты</li>
                    <li>Стек</li>
                    <li>Контакты</li>
                </ul>
            </nav>
            <div className="flex-row gap-2">
                <LanguageSwitcher />
                <button className="header-button">Диск</button>
            </div>
        </header>
    )
}
