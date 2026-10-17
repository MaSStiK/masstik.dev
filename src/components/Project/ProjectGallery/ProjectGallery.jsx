import clsx from "clsx"
import { useState } from "react"
import Image from "next/image"

import useLanguage from "@/hooks/useLanguage"

import "./ProjectGallery.css"

export default function ProjectGallery({ project, isGalleryOpen, setIsGalleryOpen }) {
    const language = useLanguage()
    const [activeImageIndex, setActiveImageIndex] = useState(0)

    if (!isGalleryOpen) {
        return (
            <div className="project-gallery__preview">
                <button
                    className="project-gallery__preview-button"
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

    const images = [
        project.preview, "/projects/map.hedgehog-rp/preview.png", project.preview, project.preview, project.preview, project.preview
    ].map(src => ({
        src,
        description: null
    }))

    const gallery = project.gallery?.length ? project.gallery : images
    
    const activeImage = gallery[activeImageIndex]
    const description = activeImage.description?.[language]

    return (
        <div className="project-gallery">
            <figure className="project-gallery__main">
                <div className="project-gallery__main-image">
                    <Image
                        src={activeImage.src}
                        alt={`${project.title} project image`}
                        draggable={false}
                        sizes={"721px"}
                        fill
                        // TODO: Исправить формат картинки, Задавать фиксированную ширину, но динамичную высоту в соответствии с картинкой 
                    />
                </div>
                <figcaption className="project-gallery__main-desc">
                    {description &&
                        <span className="project-gallery__main-title">{description}</span>
                    }
                    <span className="project-gallery__main-counter">{activeImageIndex+1} / {gallery.length}</span>
                </figcaption>
            </figure>
            <div className="project-gallery__thumbnails">
                <div className="project-gallery__thumbnails-list">
                    {gallery.map((image, i) => {
                        const thumbnailClassName = clsx(
                            "project-gallery__thumbnail",
                            activeImageIndex === i && "project-gallery__thumbnail--active"
                        )

                        return (
                            <button
                                key={i} // Потом image.src
                                className={thumbnailClassName}
                                type="button"
                                onClick={() => setActiveImageIndex(i)}
                            >
                                <Image
                                    src={image.src}
                                    alt=""
                                    draggable={false}
                                    sizes={"307px"}
                                    fill
                                />
                                <span className="flex-center project-gallery__thumbnail-counter">
                                    {String(i+1).padStart(2, "0")}
                                </span>
                            </button>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
