import Hero from "../Hero/Hero"
import Projects from "@/components/Projects/Projects"
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
