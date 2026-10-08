import { useEffect, useRef, useState } from "react"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import rehypeRaw from "rehype-raw"
import rehypeSlug from "rehype-slug"

import useLanguage from "@/hooks/useLanguage"
import getProjectReadme from "@/utils/getProjectReadme"

import Loader from "@/components/Loader/Loader"
import projectMarkdownComponents from "./ProjectMarkdownComponents"

import "./ProjectMarkdown.css"

export default function ProjectMarkdown({ githubRepo }) {
    const contentRef = useRef(null)
    const language = useLanguage()

    const [markdown, setMarkdown] = useState("")
    const [headings, setHeadings] = useState([])
    const [status, setStatus] = useState("loading")

    const isLoading = status === "loading"
    const isError = status === "error"

    // Загрузка README при смене проекта или языка
    useEffect(() => {
        const controller = new AbortController()

        async function loadReadme() {
            setStatus("loading")
            setMarkdown("")
            setHeadings([])

            try {
                const markdown = await getProjectReadme(
                    githubRepo,
                    language,
                    controller.signal
                )

                if (!markdown) {
                    setStatus("error")
                    return
                }

                setMarkdown(markdown)
                setStatus("success")
            } catch (error) {
                if (error.name !== "AbortError") {
                    setStatus("error")
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
                <Loader />
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