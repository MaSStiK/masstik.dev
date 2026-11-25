import "./ContactsForm.css"

export default function ContactsForm() {
    return (
        <div className="window window__shadow contacts__console">
            <div className="window__header">
                <span className="text-gray">{`// send-message.sh`}</span>
            </div>
            <div className="window__inner">
                <span><span>$</span> Your name</span>
                <span><span>$</span> Email</span>
                <span><span>$</span> Message</span>
            </div>
        </div>
    )
}
