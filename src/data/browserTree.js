import projectsData from "@/data/projectsData"
import categories from "@/data/categories"

// Формирование массива из файлов категории
const createProjectFiles = category => {
    return projectsData.filter(project => project.type === category)
        .map(project => ({
            type: "file",
            title: `${project.slug}.${project.extension}`
        }))
}

// Отсекаем категории которые не надо отображать в дереве
const treeCategories = Object.keys(categories).filter(category => {
    return categories[category].showInTree
})

// Формирование дерева с папками по категориям
const browserTreeData = treeCategories.map(category => {
    return {
        type: "folder",
        category,
        color: categories[category].color,
        files: createProjectFiles(category)
    }
})

export default browserTreeData