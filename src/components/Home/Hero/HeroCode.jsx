import useLocale from "@/hooks/useLocale"

// reference
const aboutMe = {
    name: "Matvey",
    age: 22,
    gender: "Male",
    role: "Web Developer",
    openToWork: true,
    energy: Infinity,
    languages: [
        "Russian",
        "English B2",
        "French A2"
    ]
};

export default function HeroCode() {
    const locale = useLocale()

    return (
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
                <span>age</span>
                <span className="text-gray">: </span>
                <span className="text-purple">22</span>
                <span className="text-gray">,</span>
            </span>
            <span>
                {`    `}
                <span>gender</span>
                <span className="text-gray">: &quot;</span>
                <span className="text-yellow">{locale.hero.aboutMe.gender}</span>
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
    )
}
