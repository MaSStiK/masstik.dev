import clsx from "clsx"
import Image from "next/image"
import HeroAboutCode from "./HeroAboutCode"

import "./HeroAbout.css"

export default function HeroAbout({
    transparent = false
}) {
    const classes = clsx(
        "window window-shadow hero-info",
        transparent && "window--transparent"
    )

    return (
        <div className={classes}>
            <div className="window__header">
                <span className="text-gray">{`// About.md`}</span>
            </div>
            <div className="window__inner">
                <Image
                    className="hero-info__pic"
                    src="/hero/profile-pic-2.webp"
                    alt="profile-pic"
                    width={256}
                    height={256}
                    loading="eager"
                />
                
                <HeroAboutCode />
            </div>
        </div>
    )
}
