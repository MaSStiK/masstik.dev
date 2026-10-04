import clsx from "clsx"
import { useState } from "react"
import Image from "next/image"

import "./ProjectGallery.css"

export default function ProjectGallery({ project, isImageOpen, setIsImageOpen }) {
    const [activeImageIndex, setActiveImageIndex] = useState(0)

    if (!isImageOpen) {
        return (
            <div className="project-gallery__preview">
                <button
                    className="project-gallery__preview-button"
                    onClick={() => setIsImageOpen(prev => !prev)}
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
                    src="/projects/hedgehog-rp/favicon.png" // TODO: project.favicon
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
    ]

    return (
        <div className="project-gallery">
            <div className="project-gallery__main">
                <Image
                    src={images[activeImageIndex]}
                    alt={`${project.title} project image`}
                    draggable={false}
                    sizes={"721px"}
                    fill
                />
            </div>
            <div className="project-gallery__thumbnails">
                <div className="project-gallery__thumbnails-list">
                    {images.map((image, i) => {
                        const thumbnailClassName = clsx(
                            "project-gallery__thumbnail",
                            activeImageIndex === i && "project-gallery__thumbnail--active"
                        )

                        return (
                            <button
                                key={i} // Потом item если link
                                className={thumbnailClassName}
                                type="button"
                                onClick={() => setActiveImageIndex(i)}
                            >
                                <Image
                                    src={image}
                                    alt=""
                                    draggable={false}
                                    sizes={"307px"}
                                    fill
                                />
                                <span className="flex-center project-gallery__thumbnail-counter">
                                    {String(i).padStart(2, "0")}
                                </span>
                            </button>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
