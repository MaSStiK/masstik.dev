import Link from "next/link"

import { ChevronRight } from "lucide-react"

export default function ContactsInfoLink({
    icon: Icon,
    title,
    subtitle,
    link
}) {
    return (
        <Link
            className="flex-row gap-3 contacts__link"
            href={link}
            target="_blank"
            rel="noopener noreferrer"
        >
            <div className="flex-center contacts__link-icon">
                <Icon size={16} />
            </div>

            <div className="flex-col">
                <span className="text-gray fs-tiny">{title}</span>
                <span className="fs-small font-console contacts__link-subtitle">{subtitle}</span>
            </div>

            <ChevronRight className="contacts__link-arrow" size={16} />
        </Link>
    )
}
