import { readFile, readdir } from "fs/promises"
import sharp from "sharp"

// Получение галереи проекта
export default async function getProjectGallery(slug) {
    const galleryPath = `${process.cwd()}/public/projects/${slug}/gallery`

    // Получение изображения с оригинальными размерами
    async function getImage(file, description = null) {
        const { width, height } = await sharp(
            `${galleryPath}/${file}`
        ).metadata()

        return {
            type: "image",
            src: `/projects/${slug}/gallery/${file}`,
            width,
            height,
            description
        }
    }

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

        let gallery = null

        // Получение настроек галереи
        try {
            const galleryFile = await readFile(
                `${galleryPath}/gallery.json`,
                "utf-8"
            )

            gallery = JSON.parse(galleryFile)
        } catch {
            gallery = null
        }

        // Формирование элементов галереи
        if (gallery) {
            return await Promise.all(
                gallery.map(item => {
                    if (item.type === "separator") {
                        return {
                            type: "separator",
                            title: item.title
                        }
                    }

                    return getImage(item.file, item.descriptions ?? null)
                })
            )
        }

        // Формирование галереи без настроек
        return await Promise.all(
            images.map(file => getImage(file))
        )
    } catch {
        return []
    }
}