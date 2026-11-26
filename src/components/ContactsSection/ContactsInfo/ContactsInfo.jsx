import useLocale from "@/hooks/useLocale"
import ContactsInfoCode from "./ContactsInfoCode"
import ContactsInfoLink from "./ContactsInfoLink"

import { FaGithub, FaTelegramPlane, FaEnvelope } from "react-icons/fa"

import "./ContactsInfo.css"

export default function ContactsInfo() {
    const locale = useLocale()

    return (
        <div className="flex-col gap-6 contacts__info">
            <h2>{locale.contacts.header}</h2>
            <span className="contacts__info-text">{locale.contacts.description}</span>

            <div className="window window__shadow">
                <div className="window__inner">
                    <ContactsInfoCode />
                </div>
            </div>

            <div className="flex-col gap-3 contacts__links">
                <div className="window window__shadow default-transition contacts__link--github">
                    <div className="window__inner">
                        <ContactsInfoLink
                            icon={FaGithub}
                            title="Github"
                            subtitle="@MaSStiK"
                            link="https://github.com/MaSStiK"
                        />
                    </div>
                </div>
                <div className="window window__shadow default-transition contacts__link--telegram">
                    <div className="window__inner">
                        <ContactsInfoLink
                            icon={FaTelegramPlane}
                            accentColor="var(--blue)"
                            title="Telegram"
                            subtitle="@MaSStiK"
                            link="https://t.me/MaSStiK"
                        />
                    </div>
                </div>
                <div className="window window__shadow default-transition contacts__link--gmail">
                    <div className="window__inner">
                        <ContactsInfoLink
                            icon={FaEnvelope}
                            accentColor="var(--red)"
                            title="Gmail"
                            subtitle="masstik.dev@gmail.com"
                            link="mailto:masstik.dev@gmail.com"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}