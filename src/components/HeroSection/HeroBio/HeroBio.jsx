import clsx from "clsx"
import Link from "next/link"
import useLocale from "@/hooks/useLocale"

import { FaGithub, FaTelegramPlane, FaAt } from "react-icons/fa"

import "./HeroBio.css"

export default function HeroBio({
    transparent = false
}) {
    const locale = useLocale()

    const classes = clsx(
        "window window-shadow hero-bio",
        transparent && "window--transparent"
    )

    // CLASS hero-info
    return (
        <div className={classes}>
            <div className="window__header">
                <span className="text-gray">{`// README.md`}</span>
            </div>
            <div className="window__inner">
                <p><span className="text-gray">&gt;</span> {locale.hero.readme.whoAmI}</p>
                <p><span className="text-gray">&gt;</span> {locale.hero.readme.start}</p>
                <p><span className="text-gray">&gt;</span> {locale.hero.readme.webStart}</p>
                <p><span className="text-gray">&gt;</span> {locale.hero.readme.experience}</p>
                <p><span className="text-gray">&gt;</span> {locale.hero.readme.passion}</p>
                <p><span className="text-gray">&gt;</span> {locale.hero.readme.ideas}</p>
                <p><span className="text-gray">&gt;</span> {locale.hero.readme.inspiration}</p>

                <hr />

                <ul className="flex-row gap-4">
                    <li>
                        <Link
                            className="button button-transition hero-bio__link hero-bio__link--github"
                            href="https://github.com/MaSStiK"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            <FaGithub size={20} />
                            Github
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="button button-transition hero-bio__link hero-bio__link--telegram"
                            href="https://t.me/MaSStiK"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            <FaTelegramPlane size={20} />
                            Telegram
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="button button-transition hero-bio__link hero-bio__link--gmail"
                            href="mailto:masstik.dev@gmail.com"
                        >
                            <FaAt size={20} />
                            Gmail
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}
