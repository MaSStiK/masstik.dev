import clsx from "clsx"
import { useState } from "react"
import Image from "next/image"

import useLocale from "@/hooks/useLocale"
import useLanguage from "@/hooks/useLanguage"

import "./ProjectGallery.css"


export default function ProjectGallery({
    project,
    isGalleryOpen,
    setIsGalleryOpen
}) {
    const locale = useLocale()
    const language = useLanguage()
    const [activeImageIndex, setActiveImageIndex] = useState(0)

    if (!isGalleryOpen) {
        return (
            <div className="project-gallery__preview">
                <button
                    className="project-gallery__preview-button"
                    disabled={!project.gallery?.length}
                    onClick={() => setIsGalleryOpen(prev => !prev)}
                >
                    <Image
                        src={project.preview}
                        alt={`${project.title} project image`}
                        draggable={false}
                        sizes="1090px"
                        fill
                    />
                </button>

                <Image
                    className="project-gallery__preview-favicon"
                    src={project.favicon}
                    alt={`${project.title} project image`}
                    draggable={false}
                    width={96}
                    height={96}
                />
            </div>
        )
    }

    const gallery = project.gallery ?? []

    // Получение только изображений для переключения активной картинки
    const images = gallery.filter(item => item.type === "image")

    // Отображение пустой галереи
    if (!images.length) {
        return (
            <div className="project-gallery">
                <div className="project-gallery__empty">
                    <span>{locale.project.gallery.empty}</span>
                </div>
            </div>
        )
    }

    const activeImage = images[activeImageIndex]
    const description = activeImage.description?.[language]

    // Добавление индекса только изображениям
    let imageIndex = 0

    const galleryItems = gallery.map(item => {
        if (item.type !== "image") {
            return item
        }

        return {
            ...item,
            imageIndex: imageIndex++
        }
    })

    return (
        <div className="project-gallery">
            <figure className="project-gallery__main">
                <div className="project-gallery__main-image">
                    <Image
                        src={activeImage.src}
                        alt={`${project.title} project image`}
                        width={activeImage.width}
                        height={activeImage.height}
                        sizes="721px"
                        draggable={false}
                    />
                </div>

                <figcaption className="project-gallery__main-desc">
                    {description &&
                        <span className="project-gallery__main-title">{description}</span>
                    }

                    <span className="project-gallery__main-counter">
                        {activeImageIndex + 1} / {images.length}
                    </span>
                </figcaption>
            </figure>

            <div className="project-gallery__thumbnails">
                <div className="project-gallery__thumbnails-list">
                    {galleryItems.map((item, i) => {
                        if (item.type === "separator") {
                            return (
                                <ProjectGallerySeparator
                                    key={`separator-${i}`}
                                    title={item.title?.[language]}
                                />
                            )
                        }

                        return (
                            <ProjectGalleryThumbnail
                                key={item.src}
                                item={item}
                                isActive={activeImageIndex === item.imageIndex}
                                onClick={() => setActiveImageIndex(item.imageIndex)}
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}


// Изображение галереи
function ProjectGalleryThumbnail({ item, isActive, onClick }) {
    const thumbnailClassName = clsx(
        "project-gallery__thumbnail",
        isActive && "project-gallery__thumbnail--active"
    )

    return (
        <button
            className={thumbnailClassName}
            type="button"
            onClick={onClick}
        >
            <Image
                src={item.src}
                alt=""
                width={item.width}
                height={item.height}
                sizes="307px"
                draggable={false}
            />

            <span className="flex-center project-gallery__thumbnail-counter">
                {String(item.imageIndex + 1).padStart(2, "0")}
            </span>
        </button>
    )
}


// Разделитель изображений
function ProjectGallerySeparator({ title }) {
    return (
        <div className="project-gallery__separator">
            <span>{title}</span>
            <hr />
        </div>
    )
}