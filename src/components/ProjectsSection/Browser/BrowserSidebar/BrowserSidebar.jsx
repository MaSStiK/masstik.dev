import clsx from "clsx"
import { Triangle } from "lucide-react"
import { GridIcon, FolderIcon, FileIcon } from "@/icons"

import categories from "@/data/categories"
import projectsData from "@/data/projectsData"
import browserTreeData from "@/data/browserTree"

import useCategoryFilter from "@/hooks/useCategoryFilter"
import useFoldersState from "@/hooks/useFoldersState"
import useActiveProjectSlug from "@/hooks/useActiveProjectSlug"
import useLocale from "@/hooks/useLocale"

import "./BrowserSidebar.css"

export default function BrowserSidebar() {
    const [categoryFilter, setCategoryFilter] = useCategoryFilter()
    const {foldersState} = useFoldersState()
    const [activeProjectSlug, setActiveProjectSlug] = useActiveProjectSlug()

    const locale = useLocale()

    function selectCategory(category) {
        // Если открыт проект - закрываем его
        if (activeProjectSlug) setActiveProjectSlug(null)

        // Переключаем категорию проектов
        setCategoryFilter(category)
    }

    const allClasses = clsx(
        "button-transition",
        "browser-tree__row",
        "browser-tree__all",
        !activeProjectSlug // Если нету активного проекта
            && categoryFilter === "all"
            && "browser-tree__row--selected"
    )

    return (
        <aside className="browser__sidebar">
            <button
                type="button"
                className={allClasses}
                style={{ "--accent-color": categories.all.color }}
                onClick={() => selectCategory("all")}
            >
                <GridIcon size={13} />
                <span>{locale.projects.tree.all}</span>
                <span className="browser-tree__count">{`[${projectsData.length}]`}</span>
            </button>

            <hr />

            <ul className="browser-tree">
                {browserTreeData.map(item => (
                    <FolderItem
                        key={item.category}
                        folder={item}
                        locale={locale}
                        categoryFilter={categoryFilter}
                        selectCategory={selectCategory}
                        isOpen={foldersState[item.category]}
                    />
                ))}
            </ul>
        </aside>
    )
}

function FolderItem({
    folder,
    locale,
    categoryFilter,
    selectCategory,
    isOpen
}) {
    const {toggleFolder} = useFoldersState()
    const [activeProjectSlug] = useActiveProjectSlug()

    const folderClasses = clsx(
        "button-transition",
        "browser-tree__row",
        "browser-tree__folder",
        !activeProjectSlug // Если нету активного проекта
            && categoryFilter === folder.category
            && "browser-tree__row--selected"
    )

    return (
        <li className="browser-tree__item">
            <button
                type="button"
                className="flex-center browser-tree__folder-toggle"
                aria-label={isOpen ? "Свернуть папку" : "Развернуть папку"}
                aria-expanded={isOpen}
                onClick={() => toggleFolder(folder.category)}
            >
                <Triangle
                    size={8}
                    color="var(--gray)"
                    className={clsx(
                        "browser-tree__triangle",
                        isOpen && "browser-tree__triangle--open"
                    )}
                />
            </button>

            <button
                type="button"
                className={folderClasses}
                style={{"--accent-color": folder.color}}
                onClick={() => selectCategory(folder.category)}
            >
                <FolderIcon
                    size={13}
                    className="browser-tree__folder-icon"
                />
                <span>{`${locale.projects.tree[folder.category]}/`}</span>
                <span className="browser-tree__count">{`[${folder.files.length}]`}</span>
            </button>

            {isOpen && (
                <ul className="browser-tree__files">
                    {folder.files.map(file => (
                        <FileItem
                            key={file.title}
                            file={file}
                        />
                    ))}
                </ul>
            )}
        </li>
    )
}

function FileItem({ file }) {
    const [activeProjectSlug, setActiveProjectSlug] = useActiveProjectSlug()

    const fileClasses = clsx(
        "button-transition",
        "browser-tree__row",
        "browser-tree__file",
        activeProjectSlug === file.slug && "browser-tree__row--selected"
    )

    return (
        <li>
            <button
                type="button"
                className={fileClasses}
                onClick={() => setActiveProjectSlug(file.slug)}
            >
                <FileIcon
                    size={11}
                    color="var(--gray)"
                />
                <span>{file.title}</span>
            </button>
        </li>
    )
}