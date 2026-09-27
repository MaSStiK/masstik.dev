import Project from "@/components/Project/Project"

export default async function ProjectPage({ params }) {
    const { projectSlug } = await params

    return (
        <Project projectSlug={projectSlug} />
    )
}