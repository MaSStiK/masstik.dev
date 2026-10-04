import "server-only"
import fs from "fs/promises"
import path from "path"

export async function getLocalMarkdown(file) {
    const filePath = path.join(
        process.cwd(),
        "content/projects",
        file
    )

    return fs.readFile(filePath, "utf8")
}

export async function getRemoteMarkdown(url) {
    const response = await fetch(url, {
        next: {
            revalidate: 3600
        }
    })

    if (!response.ok) {
        throw new Error("Failed to load markdown")
    }

    return response.text()
}