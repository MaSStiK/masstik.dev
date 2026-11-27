import useLocale from "@/hooks/useLocale"

import { Send } from "lucide-react"

import "./ContactsForm.css"

export default function ContactsForm() {
    const locale = useLocale()
    
    return (
        <div className="window window__shadow contacts__console">
            <div className="window__header">
                <span className="text-gray">{`// send-message.sh`}</span>
            </div>
            <div className="window__inner">
                <div className="flex-col gap-2">
                    <label htmlFor="username">
                        <span>$</span> {locale.contacts.form.name}
                    </label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        placeholder="username"
                        className="text-input"
                        required
                    />
                </div>

                <div className="flex-col gap-2">
                    <label htmlFor="email">
                        <span>$</span> {locale.contacts.form.email}
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="your@gmail.com"
                        className="text-input"
                    />
                </div>

                <div className="flex-col gap-2">
                    <label htmlFor="message">
                        <span>$</span> {locale.contacts.form.message}
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        className="text-input"
                        placeholder={locale.contacts.form.messagePlaceholder}
                        rows={5}
                        required
                    ></textarea>
                </div>

                <button
                    className="button default-transition"
                    type="submit"
                >
                    <Send size={16}/>
                    {locale.contacts.form.send}
                </button>
            </div>
        </div>
    )
}
