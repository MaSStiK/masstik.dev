import { useEffect, useState } from "react"
import useLocale from "@/hooks/useLocale"

// reference
const info = {
    Status: "● open to work",
    Timezone: "UTC+3 (Moscow)",
    Response: "within 24h",
    Languages: "RU / EN / FR"
};

function getLocalTime() {
    return new Date().toLocaleTimeString("en-GB", {
        timeZone: "Europe/Paris",
        hour: "2-digit",
        minute: "2-digit"
    })
}

export default function ContactsInfoCode() {
    const locale = useLocale()
    const [localTime, setLocalTime] = useState(getLocalTime)

    // Обновление локального времени каждую минуту
    useEffect(() => {
        const interval = setInterval(() => {
            setLocalTime(getLocalTime())
        }, 60000)

        return () => clearInterval(interval)
    }, [])

    return (
        <code>
            <span>
                <span className="text-yellow">Status: </span>
                <span className="text-green">● {locale.contacts.status}</span>
            </span>
            <span>
                <span className="text-yellow">Timezone: </span>
                <span className="text-light-gray">Europe/Paris (CET/CEST)</span>
            </span>
            <span>
                <span className="text-yellow">Local time: </span>
                <span className="text-blue" suppressHydrationWarning>{localTime}</span>
            </span>
            <span>
                <span className="text-yellow">Response: </span>
                <span className="text-light-gray">{locale.contacts.response.prefix}</span>
                <span className="text-green">{locale.contacts.response.time}</span>
            </span>
            <span>
                <span className="text-yellow">Languages: </span>
                <span className="text-purple">EN</span>
                <span className="text-white"> / </span>
                <span className="text-purple">RU</span>
                <span className="text-white"> / </span>
                <span className="text-purple">FR</span>
            </span>
        </code>
    )
}
