import { useEffect, useRef, useState } from "react"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import rehypeRaw from "rehype-raw"
import rehypeSlug from "rehype-slug"

import useLanguage from "@/hooks/useLanguage"
import getProjectReadme from "@/utils/getProjectReadme"

import projectMarkdownComponents from "./ProjectMarkdownComponents"

import "./ProjectMarkdown.css"


export default function ProjectMarkdown({ githubRepo }) {
    const contentRef = useRef(null)
    const language = useLanguage()

    const [markdown, setMarkdown] = useState("")
    const [headings, setHeadings] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)

    // Загрузка README при смене проекта или языка
    useEffect(() => {
        const controller = new AbortController()

        async function loadReadme() {
            setIsLoading(true)
            setIsError(false)
            setMarkdown("")
            setHeadings([])

            try {
                const markdown = await getProjectReadme(
                    githubRepo,
                    language,
                    controller.signal
                )

                if (!markdown) {
                    setIsError(true)
                    return
                }

                setMarkdown(markdown)
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

        // Отмена запроса при смене проекта или языка
        return () => controller.abort()
    }, [githubRepo, language])

    // Получение заголовков README для навигации
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

    // Состояние загрузки README
    if (isLoading) {
        return (
            <div className="project-markdown__loading">
                Loading README...
            </div>
        )
    }

    // Ошибка загрузки README
    if (isError) {
        return (
            <div className="project-markdown__error">
                <span>README.md not found</span>
            </div>
        )
    }

    return (
        <div className="project-markdown">
            {/* Навигация по разделам README */}
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

            <div className="project-markdown__content" ref={contentRef}>
                <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    rehypePlugins={[rehypeRaw, rehypeSlug]}
                    components={projectMarkdownComponents}
                >
                    {markdown}
                </ReactMarkdown>
            </div>
        </div>
    )
}