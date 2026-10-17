import { readFile, readdir } from "fs/promises"

// Получение изображений галереи проекта
export default async function getProjectGallery(slug) {
    const galleryPath = `${process.cwd()}/public/projects/${slug}/gallery`

    try {
        const files = await readdir(galleryPath)

        let descriptions = null

        // Получение описаний изображений
        try {
            const descriptionsFile = await readFile(
                `${galleryPath}/descriptions.json`,
                "utf-8"
            )

            descriptions = JSON.parse(descriptionsFile)
        } catch {
            descriptions = null
        }

        return files
            .filter(file => /\.(png|jpg|jpeg|webp|avif|gif)$/i.test(file))
            .sort((a, b) =>
                a.localeCompare(b, undefined, {
                    numeric: true
                })
            )
            .map(file => ({
                src: `/projects/${slug}/gallery/${file}`,
                description: descriptions?.[file] ?? null
            }))
    } catch {
        return []
    }
}