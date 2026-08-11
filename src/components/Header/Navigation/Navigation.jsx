import useLocale from "@/hooks/useLocale"
import "./Navigation.css"

export default function Navigation() {
    const locale = useLocale()

    return (
        <nav>
            <ul className="flex-row gap-1">
                <li>
                    <button>{locale.header.nav.about_me}</button>
                </li>
                <li>
                    <button>{locale.header.nav.projects}</button>
                </li>
                <li>
                    <button>{locale.header.nav.stack}</button>
                </li>
                <li>
                    <button>{locale.header.nav.contacts}</button>
                </li>
            </ul>
        </nav>
    )
}
