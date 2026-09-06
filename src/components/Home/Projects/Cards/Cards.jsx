import Image from "next/image"
import { useRouter } from "next/navigation"
import CardSwap, { Card } from "@/components/ReactBits/CardSwap/CardSwap"

const projects = [
    {
        slug: "igorsavelievsocialstudies",
        title: "www.igorsavelievsocialstudies.ru",
        icon: "/projects/preparation-fav.ico",
        image:  "/projects/preparation.png",
        alt: "preparation"
    },
    {
        slug: "hedgehog-rp",
        title: "hedgehog-rp.ru",
        icon:  "/projects/hedgehog-rp-fav.png",
        image: "/projects/hedgehog-rp.png",
        alt: "hedgehog-rp"
    },
    {
        slug: "punkt-b",
        title: "lk.punkt-b.pro",
        icon:  "/projects/punkt-b-fav.png",
        image: "/projects/punkt-b.png",
        alt: "punkt-b"
    }
]

import "./Cards.css"

export default function Cards() {
    const router = useRouter()

    return (
        <CardSwap
            height={345}
            cardDistance={50}
            verticalDistance={90}
            delay={5000}
            pauseOnHover={false}
            onCardClick={(index) => router.push("projects/" + projects[index].slug)}
        >
            {projects.map((item) => (
                <Card key={item.slug}>
                    <div className="card-swap__card-header">
                        <Image
                            className="card-swap__card-icon"
                            src={item.icon}
                            alt={item.alt}
                            width={18}
                            height={18}
                            draggable={false}
                        />
                        <span className="text-gray">{item.title}</span>
                    </div>
                    <Image
                        className="card-swap__card-image"
                        src={item.image}
                        alt={item.alt}
                        width={500}
                        height={311}
                        draggable={false}
                    />
                </Card>
            ))}
        </CardSwap>
    )
}