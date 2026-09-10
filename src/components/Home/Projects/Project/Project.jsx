import Image from "next/image"
import stackIcons from "./stackIcons"
import { useRouter } from "next/navigation"

import "./Project.css"

export default function Project({
    image="",
    alt="",
    category="category",
    title="title",
    desc="desc",
    stack=[]
}) {
    return (
        <div className="project">
            <div className="project__image">
                <Image
                    src={image}
                    alt={alt}
                    width={400}
                    height={249}
                    draggable={false}
                />
            </div>
            <div className="project__title">
                <div className={`project__category project__category--${category}`}></div>
                <span className="fs-large fw-bold">{title}</span>
            </div>
            <p className="text-light project__desc">{desc}</p>
            <div className="project__stack">
                {stack.map((item) => (
                    <div key={item} className="project__stack-item">
                        <Image
                            src={stackIcons[item.toLowerCase()]}
                            alt={item}
                            width={18}
                            height={18}
                        />
                        <span>{item}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}
