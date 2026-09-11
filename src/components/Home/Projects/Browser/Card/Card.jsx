import Image from "next/image"
import stackIcons from "./stackIcons"
import { useRouter } from "next/navigation"

import "./Card.css"

export default function Card({
    image="",
    alt="",
    category="category",
    title="title",
    desc="desc",
    stack=[]
}) {
    return (
        <div className="card">
            <div className="card__image">
                <Image
                    src={image}
                    alt={alt}
                    width={400}
                    height={249}
                    draggable={false}
                />
            </div>
            <div className="card__title">
                <div className={`card__category card__category--${category}`}></div>
                <span className="fs-large fw-bold">{title}</span>
            </div>
            <p className="text-light card__desc">{desc}</p>
            <div className="card__stack">
                {stack.map((item) => (
                    <div key={item} className="card__stack-item">
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
