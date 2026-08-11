import Image from "next/image"
import Link from "next/link"
import useLocale from "@/hooks/useLocale"

import "./Home.css"

export default function Home() {
    const locale = useLocale()

    return (
        <main>
            <div className="flex-col">  
                <h1 className="font-secondary">{locale.hero.hello}</h1>
                <p>{locale.hero.name}</p>
                <p>{locale.hero.profession}</p>
                <p>{locale.hero.desc}</p>
            </div>
        </main>
    )
}
