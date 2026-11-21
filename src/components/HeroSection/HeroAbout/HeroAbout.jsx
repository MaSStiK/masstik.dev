import clsx from "clsx"
import Image from "next/image"
import useLocale from "@/hooks/useLocale"

import "./HeroAbout.css"

// reference
const aboutMe = {
    name: "Matvey",
    age: 22,
    nickname: "MaSStiK",
    role: "Web Developer",
    openToWork: true,
    energy: Infinity,
    languages: [
        "Russian",
        "English B2",
        "French A2"
    ]
};

export default function HeroAbout({
    transparent = false
}) {
    const locale = useLocale()

    const classes = clsx(
        "window window-shadow hero-info",
        transparent && "window--transparent"
    )

    // CLASS hero-info
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
                
                <code>
                    <span>
                        <span className="text-blue">const </span>
                        <span className="text-purple">aboutMe</span>
                        <span className="text-red">{` = {`}</span>
                    </span>
                    <span>
                        {`    `}
                        <span>name</span>
                        <span className="text-gray">: &quot;</span>
                        <span className="text-yellow">{locale.hero.aboutMe.name}</span>
                        <span className="text-gray">&quot;,</span>
                    </span>
                    <span>
                        {`    `}
                        <span>nickname</span>
                        <span className="text-gray">: &quot;</span>
                        <span className="text-yellow">MaSStiK</span>
                        <span className="text-gray">&quot;,</span>
                    </span>
                    <span>
                        {`    `}
                        <span>role</span>
                        <span className="text-gray">: &quot;</span>
                        <span className="text-yellow">{locale.hero.aboutMe.role}</span>
                        <span className="text-gray">&quot;,</span>
                    </span>
                    <span>
                        {`    `}
                        <span>openToWork</span>
                        <span className="text-gray">: </span>
                        <span className="text-purple">true</span>
                        <span className="text-gray">,</span>
                    </span>
                    <span>
                        {`    `}
                        <span>energy</span>
                        <span className="text-gray">: </span>
                        <span className="text-purple">Infinity</span>
                        <span className="text-gray">,</span>
                    </span>
                    <span>
                        {`    `}
                        <span>languages</span>
                        <span className="text-gray">: </span>
                        <span className="text-orange">[</span>
                    </span>
                    <span>
                        {`        `}
                        <span className="text-gray">&quot;</span>
                        <span className="text-yellow">{locale.hero.aboutMe.langRu}</span>
                        <span className="text-gray">&quot;,</span>
                    </span>
                    <span>
                        {`        `}
                        <span className="text-gray">&quot;</span>
                        <span className="text-yellow">{locale.hero.aboutMe.langEn}</span>
                        <span className="text-gray">&quot;,</span>
                    </span>
                    <span>
                        {`        `}
                        <span className="text-gray">&quot;</span>
                        <span className="text-yellow">{locale.hero.aboutMe.langFr}</span>
                        <span className="text-gray">&quot;</span>
                    </span>
                    <span>
                        {`    `}
                        <span className="text-orange">]</span>
                    </span>
                    <span>
                        <span className="text-red">{`}`}</span>
                        <span className="text-gray">;</span>
                    </span>
                </code>
            </div>
        </div>
    )
}
