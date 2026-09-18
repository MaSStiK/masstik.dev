import projectsData from "@/data/projectsData"

const createProjectFiles = (projectType) => {
    return projectsData
        .filter((project) => project.type === projectType)
        .map((project) => ({
            type: "file",
            title: `${project.slug}.${project.extension}`
        }))
}

const browserTreeData = [
    {
        nameKey: "commercial",
        projectType: "commercial",
        type: "folder",
        children: createProjectFiles("commercial")
    },
    {
        nameKey: "personal",
        projectType: "personal",
        type: "folder",
        children: createProjectFiles("personal")
    },
    {
        nameKey: "educational",
        projectType: "educational",
        type: "folder",
        children: createProjectFiles("educational")
    },
    {
        nameKey: "test",
        projectType: "test",
        type: "folder",
        children: createProjectFiles("test")
    }
]

export default browserTreeData