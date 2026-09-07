import Image from "next/image"
import { useRouter } from "next/navigation"

import "./Project.css"

export default function Project({
    title="",
    icon="",
    iconAlt="",
    image="",
    alt=""
}) {
    return (
        <div className="project">
            <div className="project__header">
                <Image
                    className="project__header-icon"
                    src={icon}
                    alt={iconAlt}
                    width={18}
                    height={18}
                    draggable={false}
                />
                <span className="text-gray">{title}</span>
            </div>
            <div className="flex-row">
                <Image
                    className="project-inner__image"
                    src={image}
                    alt={alt}
                    width={400}
                    height={249}
                    draggable={false}
                />
                <div className="project-inner">
                    <span>Название проекта</span>
                    <span>Описание проекта Описание Описание Описание</span>
                </div>
            </div>
        </div>
    )
}
