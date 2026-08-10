"use client"
import Image from "next/image"
import Link from "next/link"
import { useAtomValue } from "jotai"
import { localeAtom } from "@/store/language"
import "@/app/styles/home.css"

import Header from "@/components/Header/Header"

export default function Home() {
    const locale = useAtomValue(localeAtom)

    return (
        <>
            <Header />

            <main>
                <div className="flex-col">  
                    <h1>{locale.heroHello}</h1>
                    <p>{locale.heroName}</p>
                    <p>{locale.heroProfession}</p>
                    <p>{locale.heroDesc}</p>
                </div>
            </main>
        </>
    )
}
