import projectsData from "@/data/projectsData"

const GITHUB_USERNAME = "MaSStiK"

async function getGithubProjects() {
    const response = await fetch(
        `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100`,
        {
            next: {
                revalidate: 3600
            }
        }
    )

    if (!response.ok) {
        throw new Error("Failed to fetch GitHub repositories")
    }

    const repos = await response.json()

    return repos
}

export default async function getProjects() {
    const repos = await getGithubProjects()

    return projectsData.map(project => {
        const repo = repos.find(repo => repo.name === project.githubRepo)

        return {
            ...project,
            year: repo?.created_at ? new Date(repo.created_at).getFullYear() : null,
            github: repo?.html_url ?? null,
            website: repo?.homepage ?? null,
            lastUpdated: repo?.pushed_at ?? null,

            readme: repo
                ? `https://raw.githubusercontent.com/${GITHUB_USERNAME}/${repo.name}/${repo.default_branch}/README.md`
                : null
        }
    })
}