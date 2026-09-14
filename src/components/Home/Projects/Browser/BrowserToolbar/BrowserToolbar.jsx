import Image from "next/image"
import { ChevronLeft, Search } from "lucide-react"
import useLocale from "@/hooks/useLocale"

import "./BrowserToolbar.css"

export default function BrowserToolbar() {
    const locale = useLocale()
    return (
        <div className="browser__toolbar">
            <div className="browser__toolbar-dots">
                <div className="browser__toolbar-dot browser__toolbar-dot--red"></div>
                <div className="browser__toolbar-dot browser__toolbar-dot--yellow"></div>
                <div className="browser__toolbar-dot browser__toolbar-dot--green"></div>
            </div>

            <div className="flex-row gap-3">
                <button className="button-transition center browser__back-button"
                    aria-label={locale.projects.toolbar.back}
                >
                    <ChevronLeft size={20} />
                </button>
                <div className="browser__address-bar">
                    <Image
                        src="/icons/lock.svg"
                        alt=""
                        width="20"
                        height="20"
                    />
                    <span className="text-gray font-console">masstik.dev/projects</span>
                </div>
            </div>

            <div className="browser__search-bar">
                <Search size={20} />
                <input
                    type="text"
                    placeholder={locale.projects.toolbar.search}
                />
            </div>
        </div>
    )
}
