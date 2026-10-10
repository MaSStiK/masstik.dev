import { useEffect, useRef, useState } from "react"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import rehypeRaw from "rehype-raw"
import remarkHideSections from "./remarkHideSections.js"

import useLanguage from "@/hooks/useLanguage"
import getProjectReadme from "@/utils/getProjectReadme"
import getHeadingId from "@/utils/getHeadingId"

import Loader from "@/components/Loader/Loader"
import ProjectMarkdownNav from "./ProjectMarkdownNav/ProjectMarkdownNav"
import projectMarkdownComponents from "./ProjectMarkdownComponents"

import "./ProjectMarkdown.css"

export default function ProjectMarkdown({ githubRepo }) {
    const language = useLanguage()
    const contentRef = useRef(null)

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
            Array.from(elements).map(element => {
                const id = getHeadingId(element.textContent)

                // Обновление ID заголовка без эмодзи
                element.id = id

                return {
                    id,
                    title: element.textContent,
                    level: element.tagName.toLowerCase()
                }
            })
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
    // TODO: Добавить обработку ошибок с разным текстом, учитывать что у github может возникнуть лимит
    if (isError) {
        return (
            <div className="project-markdown__error">
                <span>README.md not found</span>
            </div>
        )
    }

    return (
        <div className="project-markdown">
            <ProjectMarkdownNav headings={headings} />

            <div className="project-markdown__content" ref={contentRef}>
                <ReactMarkdown
                    remarkPlugins={[remarkGfm, remarkHideSections]}
                    rehypePlugins={[rehypeRaw]}
                    components={projectMarkdownComponents}
                >
                    {markdown}
                </ReactMarkdown>
            </div>
        </div>
    )
}