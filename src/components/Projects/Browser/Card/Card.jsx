import Image from "next/image"
import { useAtomValue } from "jotai"
import { languageAtom } from "@/store/language"
import formatTimeAgo from "@/utils/formatTimeAgo"
import projectTypeColors from "@/data/projectTypeColors"

import "./Card.css"

export default function Card({ project }) {
    const language = useAtomValue(languageAtom)

    return (
        <div className="card" style={{"--accent-color": projectTypeColors[project.type]}}>
            <div className="card__image">
                <Image
                    src={project.image}
                    alt={`${project.title} project image`}
                    width={336} // Ориг 1500
                    height={209} // Ориг 932
                    draggable={false}
                />
            </div>
            <div className="card__content">
                <div className="card__title">
                    <div className="card__type"></div>
                    <span>{project.title}</span>
                </div>
                <p className="card__desc">{project.desc}</p>
                <div className="card__stack">
                    {project.stack.map((item) => (
                        <span key={item} className="card__stack-item">{item}</span>
                    ))}
                </div>
            </div>
        </div>
    )
}
