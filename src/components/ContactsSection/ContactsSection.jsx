"use client"
import SectionHeader from "@/components/SectionHeader/SectionHeader"
import ContactsInfo from "./ContactsInfo/ContactsInfo"
import ContactsForm from "./ContactsForm/ContactsForm"

import "./ContactsSection.css"

export default function ContactsSection() {
    
    return (
        <section className="contacts" id="contacts">
            <div className="flex-col gap-4 contacts__content">
                <SectionHeader
                    accentColor="--blue"
                    header="contacts"
                    number="03"
                />
                
                <div className="flex-row gap-8 contacts__body">
                    <ContactsInfo />
                    <ContactsForm />
                </div>
            </div>
        </section>
    )
}
