import projectDescriptions from "@/locales/projectDescriptions"

const projectsData = [
    {
        slug: "punkt-b",
        githubRepo: "punkt-b",
        extension: "html",
        title: "Punkt B - Личный кабинет",
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
        type: "test",
        status: "archived",
        role: "Frontend",
        stack: ["Figma"]
    },
]

projectsData.forEach(project => {
    project.preview = `/projects/${project.slug}/preview.png`
    project.favicon = `/projects/${project.slug}/favicon.png`
    project.description = projectDescriptions[project.slug] ?? null
})

export default projectsData