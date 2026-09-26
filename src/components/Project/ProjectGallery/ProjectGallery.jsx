import clsx from "clsx"
import { useState } from "react"
import Image from "next/image"

import "./ProjectGallery.css"

export default function ProjectGallery({ project }) {
    const [isImageOpen, setIsImageOpen] = useState(false)

    // const imageClassName = clsx(
    //     "project-gallery__preview",
    //     isImageOpen && "project-gallery__preview--open"
    // )

    if (!isImageOpen) {
        return (
            <button
                className="project-gallery__preview"
                onClick={() => setIsImageOpen(prev => !prev)}
            >
                <Image
                    src={project.image}
                    alt={`${project.title} project image`}
                    draggable={false}
                    sizes="1090px"
                    fill
                />
            </button>
        )
    }

    return (
        <div className="project-gallery">
            
        </div>
    )
}
