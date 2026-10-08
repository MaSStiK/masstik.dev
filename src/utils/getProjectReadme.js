export default async function getProjectReadme(repo, language, signal) {
    if (!repo) return null

    // Получение файлов из корня репозитория
    const response = await fetch(
        `https://api.github.com/repos/MaSStiK/${repo}/contents`,
        { signal }
    )

    if (!response.ok) return null

    const files = await response.json()
    const readmes = {}

    // Поиск доступных README файлов в корне проекта
    for (const file of files) {
        if (file.name === "README.md") {
            readmes.en = file.download_url
        }

        if (file.name === "README.ru.md") {
            readmes.ru = file.download_url
        }

        if (file.name === "README.fr.md") {
            readmes.fr = file.download_url
        }
    }

    // Выбор README текущего языка с fallback на английский
    const readmeUrl = readmes[language] ?? readmes.en
    if (!readmeUrl) return null

    // Получение содержимого README
    const readmeResponse = await fetch(readmeUrl, { signal })
    if (!readmeResponse.ok) return null

    return readmeResponse.text()
}