import Header from "@/components/Header/Header"
import Footer from "@/components/Footer/Footer"
import Project from "@/components/Project/Project"

import "@/components/Browser/Browser.css"

import "./page.css"

export default async function ProjectPage({ params }) {
    const { projectSlug } = await params

    return (
        <>
            <Header />
            <main>
                <div className="project__page">
                    <Project projectSlug={projectSlug} />
                </div>
            </main>
            <Footer />
        </>
    )
}