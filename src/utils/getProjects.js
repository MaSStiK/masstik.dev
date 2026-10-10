import projectsData from "@/data/projectsData"
import getProjectGallery from "@/utils/getProjectGallery"

// Получение списка репозиториев GitHub
async function getGithubProjects() {
    const response = await fetch(
        "https://api.github.com/users/MaSStiK/repos?per_page=100",
        {
            next: {
                revalidate: 3600
            }
        }
    )

    if (!response.ok) {
        throw new Error("Failed to fetch GitHub repositories")
    }

    return response.json()
}

export default async function getProjects() {
    // Получение данных репозиториев
    const repos = await getGithubProjects()

    // Объединение локальных данных с данными GitHub
    return Promise.all(
        projectsData.map(async project => {
            const repo = repos.find(repo => repo.name === project.githubRepo)

            const gallery = await getProjectGallery(project.slug)

            return {
                ...project,
                year: repo?.created_at ? new Date(repo.created_at).getFullYear() : null,
                github: repo?.html_url ?? null,
                website: repo?.homepage ?? null,
                lastUpdated: repo?.pushed_at ?? null,
                gallery
            }
        })
    )
}