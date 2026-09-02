import Image from "next/image"
import Link from "next/link"
import useLocale from "@/hooks/useLocale"
import PixelBlast from "@/components/ReactBits/PixelBlast/PixelBlast"
import { FaGithub, FaTelegramPlane, FaAt } from "react-icons/fa"
import HeroCode from "./HeroCode"

import "./Hero.css"

export default function Hero() {
    const locale = useLocale()

    return (
        <section className="hero">
            <PixelBlast
                variant="triangle"
                pixelSize={4}
                color="#ab9df2"
                patternScale={2}
                patternDensity={1.5}
                pixelSizeJitter={0}
                enableRipples
                rippleSpeed={0.2}
                rippleThickness={0.12}
                rippleIntensityScale={1.5}
                liquid={false}
                speed={0.5}
                edgeFade={0}
                transparent
            />

            <div className="hero__container">
                <div className="hero__content">
                    <div className="hero-block hero__info">
                        <div className="hero-block__header">
                            <span className="text-gray">{`// About.md`}</span>
                        </div>
                        <div className="hero-block__inner">
                            <Image
                                className="hero__info-pic"
                                src="/hero/profile-pic-2.webp"
                                alt="profile-pic"
                                width={256}
                                height={256}
                            />
                            <HeroCode />
                        </div>
                    </div>

                    <div className="hero__wrapper">
                        <div className="hero-block hero__bio">
                            <div className="hero-block__header">
                                <span className="text-gray">{`// README.md`}</span>
                            </div>
                            <div className="hero-block__inner">
                                <p><span className="text-gray">&gt;</span> {locale.hero.readme.whoAmI}</p>
                                <p><span className="text-gray">&gt;</span> {locale.hero.readme.start}</p>
                                <p><span className="text-gray">&gt;</span> {locale.hero.readme.webStart}</p>
                                <p><span className="text-gray">&gt;</span> {locale.hero.readme.experience}</p>
                                <p><span className="text-gray">&gt;</span> {locale.hero.readme.passion}</p>
                                <p><span className="text-gray">&gt;</span> {locale.hero.readme.ideas}</p>
                                <p><span className="text-gray">&gt;</span> {locale.hero.readme.inspiration}</p>

                                <hr />

                                <ul className="flex-row gap-4 hero__links">
                                    <li>
                                        <Link className="button hero__link-github"
                                            href="https://github.com/MaSStiK"
                                            target="_blank"
                                        >
                                            <FaGithub />Github
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="button hero__link-telegram"
                                            href="https://t.me/MaSStiK"
                                            target="_blank"
                                        >
                                            <FaTelegramPlane />Telegram
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="button hero__link-gmail"
                                            href="mailto:masstik.dev@gmail.com"
                                        >
                                            <FaAt />Gmail
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="flex-row gap-6 hero__buttons">
                            <button className="button hero__button-hire">Связаться со мной</button>
                            <button className="button hero__button-projects">Проекты</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
