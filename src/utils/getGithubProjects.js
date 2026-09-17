const GITHUB_USERNAME = "MaSStiK"

export default async function getGithubProjects() {
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