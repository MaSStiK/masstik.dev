import BrowserToolbar from "./BrowserToolbar/BrowserToolbar"
import BrowserSidebar from "./BrowserSidebar/BrowserSidebar"
import Card from "./Card/Card"
import projectsData from "./projectsData"

import "./Browser.css"

export default function Browser() {
    // Прокинуть сеттер фильтра в BrowserSidebar и вызывать от туда смену фильтра отображаемых проектов
    return (
        <div className="browser">
            <BrowserToolbar />
            <div className="browser__body">
                <BrowserSidebar />
                <div className="browser__content">
                    {projectsData.map((item) => (
                        <Card   
                            key={item.slug}
                            image={item.image}
                            alt={item.alt}
                            category={item.category}
                            title={item.title}
                            desc={item.desc}
                            stack={item.stack}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}
