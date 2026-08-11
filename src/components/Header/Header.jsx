import { HardDrive } from "lucide-react";
import useLocale from "@/hooks/useLocale"
import LanguageSwitcher from "./LanguageSwitcher/LanguageSwitcher"
import Navigation from "./Navigation/Navigation";

import "./Header.css"

export default function Header() {
    const locale = useLocale()

    return (
        <header className="flex-row">
            <span>
                <span className="fs-xlarge text-purple">{"<"}</span>
                <span className="fs-xlarge fw-bold"> MaSStiK.dev </span>
                <span className="fs-xlarge text-purple">{"/>"}</span>
                </span>
            <Navigation />
            <div className="flex-row gap-2">
                <LanguageSwitcher />
                <button className="header-button">
                    <HardDrive size={16} />
                    {locale.header.disc}
                </button>
            </div>
        </header>
    )
}
