"use client"

import { useRef } from "react"

import BrowserToolbar from "./BrowserToolbar/BrowserToolbar"
import BrowserSidebar from "./BrowserSidebar/BrowserSidebar"
import CardGrid from "./CardGrid/CardGrid"

import useActiveProjectSlug from "@/hooks/useActiveProjectSlug"
import useProjectDeepLink from "@/hooks/useProjectDeepLink"

import Project from "@/components/Project/Project"

import "./Browser.css"

export default function Browser() {
    const [activeProjectSlug] = useActiveProjectSlug()
    const browserRef = useRef(null)

    useProjectDeepLink(browserRef)

    return (
        <div className="browser" ref={browserRef}>
            <BrowserToolbar />

            <div className="browser__body">
                <BrowserSidebar />

                <div className="browser__content" id="browser-content">
                    {activeProjectSlug
                        ? <Project
                            key={activeProjectSlug}
                            projectSlug={activeProjectSlug}
                          />
                        : <CardGrid />
                    }
                </div>
            </div>
        </div>
    )
}