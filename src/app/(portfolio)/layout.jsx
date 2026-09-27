import Header from "@/components/Header/Header"
import Footer from "@/components/Footer/Footer"

import Hero from "@/components/HeroSection/HeroSection"
import Projects from "@/components/ProjectsSection/ProjectsSection"
import Contacts from "@/components/Contacts/Contacts"

import Browser from "@/components/Browser/Browser"

export default function PortfolioLayout({ children }) {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <Projects>
                    <Browser>
                        {children}
                    </Browser>
                </Projects>
                <Contacts />
            </main>
            <Footer />
        </>
    )
}
