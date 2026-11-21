"use client"

import BrowserToolbar from "./BrowserToolbar/BrowserToolbar"
import BrowserSidebar from "./BrowserSidebar/BrowserSidebar"
import CardGrid from "./CardGrid/CardGrid"

import useActiveProjectSlug from "@/hooks/useActiveProjectSlug"
import useBrowserUrlSync from "@/hooks/useBrowserUrlSync"

import Project from "@/components/Project/Project"

import "./Browser.css"

export default function Browser() {
    const [activeProjectSlug] = useActiveProjectSlug()

    useBrowserUrlSync()

    return (
        <div className="window window-shadow browser">
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