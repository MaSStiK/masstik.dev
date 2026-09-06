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
                <span className="font-console fs-xlarge text-gray">{"<"}</span>
                <span className="font-console fs-xlarge text-red site-title">MaSStiK.dev</span>
                <span className="font-console fs-xlarge text-gray">{"/>"}</span>
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
