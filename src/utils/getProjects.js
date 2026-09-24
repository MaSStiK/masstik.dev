import projectsData from "@/data/projectsData"
import getGithubProjects from "@/utils/getGithubProjects"

export default async function getProjects() {
    const repos = await getGithubProjects()

    return projectsData.map(project => {
        const repo = repos.find(repo => repo.name === project.githubRepo)

        return {
            ...project,
            year: repo?.created_at ? new Date(repo.created_at).getFullYear() : null,
            github: repo?.html_url ?? null,
            website: repo?.homepage ?? null,
            lastUpdated: repo?.pushed_at ?? null
        }
    })
}