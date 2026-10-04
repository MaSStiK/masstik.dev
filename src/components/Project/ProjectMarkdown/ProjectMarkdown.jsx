"use client"

import { useEffect, useRef, useState } from "react"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import rehypeRaw from "rehype-raw"
import rehypeSlug from "rehype-slug"

import projectMarkdownComponents from "./ProjectMarkdownComponents"

import "./ProjectMarkdown.css"

export default function ProjectMarkdown({ readme }) {
    const contentRef = useRef(null)

    const [markdown, setMarkdown] = useState("")
    const [headings, setHeadings] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)

    useEffect(() => {
        const controller = new AbortController()

        async function loadReadme() {
            setIsLoading(true)
            setIsError(false)
            setMarkdown("")
            setHeadings([])

            if (!readme) {
                setIsError(true)
                setIsLoading(false)
                return
            }

            try {
                const response = await fetch(readme, {
                    signal: controller.signal
                })

                if (!response.ok) {
                    setIsError(true)
                    return
                }

                const text = await response.text()

                setMarkdown(text)
            } catch (error) {
                if (error.name !== "AbortError") {
                    setIsError(true)
                }
            } finally {
                if (!controller.signal.aborted) {
                    setIsLoading(false)
                }
            }
        }

        loadReadme()

        return () => controller.abort()
    }, [readme])

    useEffect(() => {
        if (!markdown || !contentRef.current) return

        const elements = contentRef.current.querySelectorAll("h2, h3")

        setHeadings(
            Array.from(elements).map(element => ({
                id: element.id,
                title: element.textContent,
                level: element.tagName.toLowerCase()
            }))
        )
    }, [markdown])

    if (isLoading) {
        return (
            <div className="project-markdown__loading">
                Loading README...
            </div>
        )
    }

    if (isError) {
        return (
            <div className="project-markdown__error">
                <span>README.md not found</span>
            </div>
        )
    }

    return (
        <div className="project-markdown">
            <nav className="project-markdown__navigation">
                {headings.map(heading => (
                    <a
                        key={heading.id}
                        className={`project-markdown__navigation-${heading.level}`}
                        href={`#${heading.id}`}
                    >
                        {heading.title}
                    </a>
                ))}
            </nav>

            <div
                ref={contentRef}
                className="project-markdown__content"
            >
                <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    rehypePlugins={[
                        rehypeRaw,
                        rehypeSlug
                    ]}
                    components={projectMarkdownComponents}
                >
                    {markdown}
                </ReactMarkdown>
            </div>
        </div>
    )
}