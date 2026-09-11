import Hero from "./Hero/Hero"
import Projects from "./Projects/Projects"
import Contacts from "./Contacts/Contacts"

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
