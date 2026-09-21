import clsx from "clsx"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Play } from "lucide-react"
import { TransparencyIcon } from "@/icons"
import { FaGithub, FaTelegramPlane, FaAt } from "react-icons/fa"

import PixelBlast from "@/components/ReactBits/PixelBlast/PixelBlast"
import HeroCode from "./HeroCode"
import HeroBlock from "./HeroBlock/HeroBlock"

import useLocale from "@/hooks/useLocale"

import "./Hero.css"

export default function Hero() {
    const [isBackgroundVisible, setIsBackgroundVisible] = useState(true)
    const [isHeroBlockTransparent, setIsHeroBlockTransparent] = useState(true)
    const locale = useLocale()

    return (
        <section className="hero">
            <PixelBlast
                className={clsx(isBackgroundVisible && "pixel-blast--visible")}
                variant="triangle"
                pixelSize={4}
                color="#675F92"
                patternScale={2}
                patternDensity={1}
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
                    <div className="hero__effects-controls">
                        <button
                            className={clsx(
                                "flex-center",
                                "button-transition",
                                isBackgroundVisible && "hero__effects-control--active"
                            )}
                            onClick={() => setIsBackgroundVisible(prev => !prev)}
                        >
                            <Play size={16} />
                        </button>
                        <button
                            className={clsx(
                                "flex-center",
                                "button-transition",
                                isHeroBlockTransparent && "hero__effects-control--active"
                            )}
                            onClick={() => setIsHeroBlockTransparent(prev => !prev)}
                        >
                            <TransparencyIcon size={16} transparent={isHeroBlockTransparent} />
                        </button>
                    </div>

                    <HeroBlock
                        className="hero-info"
                        title="// About.md"
                        transparent={isHeroBlockTransparent}
                    >
                        <Image
                            className="hero-info__pic"
                            src="/hero/profile-pic-2.webp"
                            alt="profile-pic"
                            width={256}
                            height={256}
                            loading="eager"
                        />
                        <HeroCode />
                    </HeroBlock>

                    <div className="hero__side">
                        <HeroBlock
                            className="hero-bio"
                            title="// README.md"
                            transparent={isHeroBlockTransparent}
                        >
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
                        </HeroBlock>

                        <div className="flex-row gap-6 hero__buttons">
                            <button className="button button-transition hero__button hero__button--hire">
                                {locale.hero.actions.contact}
                            </button>
                            <button className="button button-transition hero__button hero__button--projects">
                                {locale.hero.actions.projects}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
