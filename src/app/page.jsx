import Header from "@/components/Header/Header"
import Footer from "@/components/Footer/Footer"

import Hero from "@/components/HeroSection/HeroSection"
import Projects from "@/components/ProjectsSection/ProjectsSection"
import Contacts from "@/components/ContactsSection/ContactsSection"

import Browser from "@/components/Browser/Browser"

export default function HomePage() {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <Projects />
                <Contacts />
            </main>
            <Footer />
        </>
    )
}
