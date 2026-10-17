import { readFile, readdir } from "fs/promises"

// Получение галереи проекта
export default async function getProjectGallery(slug) {
    const galleryPath = `${process.cwd()}/public/projects/${slug}/gallery`

    try {
        const files = await readdir(galleryPath)

        // Получение изображений без gallery.json
        const images = files
            .filter(file => !file.endsWith(".json"))
            .sort((a, b) =>
                a.localeCompare(b, undefined, {
                    numeric: true
                })
            )

        try {
            // Получение настроек галереи
            const galleryFile = await readFile(
                `${galleryPath}/gallery.json`,
                "utf-8"
            )

            const gallery = JSON.parse(galleryFile)

            // Формирование элементов галереи
            return gallery.map(item => {
                if (item.type === "separator") {
                    return {
                        type: "separator",
                        title: item.title
                    }
                }

                return {
                    type: "image",
                    src: `/projects/${slug}/gallery/${item.file}`,
                    description: item.descriptions ?? null
                }
            })
        } catch {
            // Формирование галереи без настроек
            return images.map(file => ({
                type: "image",
                src: `/projects/${slug}/gallery/${file}`,
                description: null
            }))
        }
    } catch {
        return []
    }
}