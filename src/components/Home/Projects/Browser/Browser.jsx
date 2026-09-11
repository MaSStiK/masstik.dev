import BrowserToolbar from "./BrowserToolbar/BrowserToolbar"
import Card from "./Card/Card"
import projectsData from "./projectsData"

import "./Browser.css"

export default function Browser() {
    return (
        <div className="browser">
            <BrowserToolbar />
            <div className="browser__body">
                <aside className="browser__sidebar">
                    <button className="browser__sidebar-button--selected">
                        <span>Все</span>
                        <span>30</span>
                    </button>
                    <button>
                        <span>Коммерческие</span>
                        <span>2</span>
                    </button>
                    <button>
                        <span>Pet-Проекты</span>
                        <span>8</span>
                    </button>
                    <button>
                        <span>Учебные</span>
                        <span>4</span>
                    </button>
                    <button>
                        <span>Тестовые</span>
                        <span>6</span>
                    </button>
                    <button>
                        <span>Другие</span>
                        <span>10</span>
                    </button>
                </aside>

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
