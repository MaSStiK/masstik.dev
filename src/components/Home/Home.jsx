"use client"
import Hero from "@/components/HeroSection/HeroSection"
import Projects from "@/components/ProjectsSection/ProjectsSection"
import Contacts from "@/components/Contacts/Contacts"

import "./Home.css"

export default function Home() {
    return (
        <main>
            <Hero />
            <Projects />
            <Contacts />
        </main>
    )
}
