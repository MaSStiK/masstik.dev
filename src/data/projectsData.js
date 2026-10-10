const projectsData = [
    {
        slug: "punkt-b",
        githubRepo: "punkt-b",
        extension: "html",
        title: "Punkt B - Личный кабинет",
        description: "Коммерческий проект для международной онлайн-школы выбора профессии «Пункт Б».",
        type: "commercial",
        status: "archived",
        role: "Frontend",
        stack: ["jQuery", "Moment.js"]
    },
    {
        slug: "preparation-for-exams",
        githubRepo: "preparation-for-exams",
        extension: "html",
        title: "Сайт преподавателя",
        description: "Коммерческий проект лендинга для частного преподавателя обществознания.",
        type: "commercial",
        status: "archived",
        role: "Frontend",
        stack: ["jQuery", "IMask.js"]
    },
    {
        slug: "hedgehog-rp",
        githubRepo: "hedgehog-rp-legacy",
        extension: "jsx",
        title: "Hedgehog RP",
        description: "Социальная платформа для политической ролевой игры.",
        type: "personal",
        status: "completed",
        role: "Fullstack",
        stack: ["React", "Vite"]
    },
    {
        slug: "map.hedgehog-rp",
        githubRepo: "map.hedgehog-rp",
        extension: "jsx",
        title: "Hedgehog RP Map",
        description: "Interactive map of the Hedgehog RP world.",
        type: "personal",
        status: "completed",
        role: "Frontend",
        stack: ["React"]
    },
    {
        slug: "tv.hedgehog-rp",
        githubRepo: "tv.hedgehog-rp",
        extension: "jsx",
        title: "Hedgehog RP TV",
        description: "Hedgehog TV is a video hosting platform for the Hedgehog RP world.",
        type: "personal",
        status: "completed",
        role: "Fullstack",
        stack: ["Next.js", "clsx", "Tippy.js", "Moment.js"]
    },
    {
        slug: "red-chat",
        githubRepo: "red-chat",
        extension: "jsx",
        title: "Red Chat",
        description: "Мессенджер в стиле Telegram с сообщениями в реальном времени, профилями и чатами.",
        type: "personal",
        status: "paused",
        role: "Fullstack",
        stack: ["Next.js", "Jotai", "MongoDB", "Mongoose"]
    },
    {
        slug: "skills-testing",
        githubRepo: "skills-testing-public",
        extension: "html",
        title: "Тестирование навыков",
        description: "Тестирование навыков продакт-менеджмента на основе теста ProductStar.",
        type: "educational",
        status: "archived",
        role: "Frontend",
        stack: ["jQuery", "IMask.js", "Figma"]
    },
    {
        slug: "fortune-wheel",
        githubRepo: "fortune-wheel-public",
        extension: "html",
        title: "Колесо Фортуны",
        description: "Интерактивное колесо для случайного распределения подарков между пользователями.",
        type: "educational",
        status: "archived",
        role: "Frontend",
        stack: ["jQuery", "IMask.js", "Figma"]
    },
    {
        slug: "rocket-business",
        githubRepo: "rocket-business",
        extension: "html",
        title: "Rocket Business",
        description: "Тестовое задание от rocket-business",
        type: "test",
        status: "archived",
        role: "Frontend",
        stack: ["Figma"]
    },
]

projectsData.forEach(project => {
    project.preview = `/projects/${project.slug}/preview.png`
    project.favicon = `/projects/${project.slug}/favicon.png`
})

export default projectsData