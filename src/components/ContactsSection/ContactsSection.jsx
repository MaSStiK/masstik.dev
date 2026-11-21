"use client"
import useLocale from "@/hooks/useLocale"
import SectionHeader from "@/components/SectionHeader/SectionHeader"

import "./ContactsSection.css"

export default function ContactsSection() {
    const locale = useLocale()
    
    return (
        <section className="contacts" id="contacts">
            <div className="contacts__container">
                <SectionHeader
                    accentColor="--blue"
                    header="contacts"
                    number="03"
                />
                <h2>{locale.contacts.header}</h2>
                <span className="contacts__description">{locale.contacts.description}</span>
            </div>
        </section>
    )
}
