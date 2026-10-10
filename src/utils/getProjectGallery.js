import { readdir } from "fs/promises"

// Получение изображений галереи проекта
export default async function getProjectGallery(slug) {
    const galleryPath = `${process.cwd()}/public/projects/${slug}/gallery`

    try {
        const files = await readdir(galleryPath)

        return files
            .filter(file =>
                /\.(png|jpg|jpeg|webp|avif|gif)$/i.test(file)
            )
            .sort((a, b) =>
                a.localeCompare(b, undefined, {
                    numeric: true
                })
            )
            .map(file =>
                `/projects/${slug}/gallery/${file}`
            )
    } catch {
        return []
    }
}