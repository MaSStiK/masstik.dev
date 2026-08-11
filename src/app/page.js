"use client"
import Image from "next/image"
import Link from "next/link"
import useLocale from "@/hooks/useLocale"
import "@/app/styles/home.css"

import Header from "@/components/Header/Header"

export default function Home() {
    const locale = useLocale()

    return (
        <>
            <Header />

            <main>
                <div className="flex-col">  
                    <h1>{locale.hero.hello}</h1>
                    <p>{locale.hero.name}</p>
                    <p>{locale.hero.profession}</p>
                    <p>{locale.hero.desc}</p>
                </div>
            </main>
        </>
    )
}
