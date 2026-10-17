import { readFile } from "fs/promises"

// Получение галереи проекта
export default async function getProjectGallery(slug) {
    const galleryPath = `${process.cwd()}/public/projects/${slug}/gallery`

    try {
        // Получение данных галереи
        const galleryFile = await readFile(
            `${galleryPath}/gallery.json`,
            "utf-8"
        )

        const gallery = JSON.parse(galleryFile)

        // Формирование элементов галереи
        return gallery.map(item => {
            if (item.type === "separator") {
                return {
                    type: item.type,
                    title: item.title
                }
            }

            return {
                type: item.type,
                src: `/projects/${slug}/gallery/${item.file}`,
                description: item.descriptions
            }
        })
    } catch {
        return []
    }
}