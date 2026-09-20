import clsx from "clsx"
import { useState } from "react"
import { Triangle } from "lucide-react"
import { GridIcon, FolderIcon, FileIcon } from "@/icons"
import projectsData from "@/data/projectsData"
import browserTreeData from "@/data/browserTreeData"
import projectTypeColors from "@/data/projectTypeColors"
import useProjectFilter from "@/hooks/useProjectFilter"

import "./BrowserSidebar.css"

import useLocale from "@/hooks/useLocale"


export default function BrowserSidebar() {
    const [projectFilter, setProjectFilter] = useProjectFilter()
    const locale = useLocale()

    const allClassName = clsx(
        "button-transition",
        "browser-tree__row",
        "browser-tree__all",
        projectFilter === "all" && "browser-tree__row--selected"
    )

    return (
        <aside className="browser__sidebar">
            <button
                type="button"
                className={allClassName}
                style={{ "--accent-color": projectTypeColors.all }}
                onClick={() => setProjectFilter("all")}
            >
                <GridIcon size={13} />
                <span>{locale.projects.tree.all}</span>
                <span className="browser-tree__count">{`[${projectsData.length}]`}</span>
            </button>
            <hr />
            <ul className="browser-tree">
                {browserTreeData.map((item) => (
                    <TreeItem
                        key={item.nameKey}
                        item={item}
                        locale={locale}
                    />
                ))}
            </ul>
        </aside>
    )
}

function TreeItem({ item, locale }) {
    if (item.type === "folder") {
        return <FolderItem item={item} locale={locale} />
    }
    return <FileItem item={item} />
}

function FolderItem({ item, locale }) {
    const [isOpen, setIsOpen] = useState(true)
    const [projectFilter, setProjectFilter] = useProjectFilter()

    const folderClassName = clsx(
        "button-transition",
        "browser-tree__row",
        "browser-tree__folder",
        projectFilter === item.projectType && "browser-tree__row--selected"
    )

    return (
        <li className="browser-tree__item">
            <button
                type="button"
                className="flex-center browser-tree__folder-toggle"
                aria-label={isOpen ? "Свернуть папку" : "Развернуть папку"}
                aria-expanded={isOpen}
                onClick={() => setIsOpen(prev => !prev)}
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
                className={folderClassName}
                style={{ "--accent-color": projectTypeColors[item.projectType] }}
                onClick={() => setProjectFilter(item.projectType)}
            >
                <FolderIcon
                    size={13}
                    className="browser-tree__folder-icon"
                />

                <span>{`${locale.projects.tree[item.nameKey]}/`}</span>
                <span className="browser-tree__count">{`[${item.children.length}]`}</span>
            </button>

            {item.children && isOpen && (
                <ul className="browser-tree__children">
                    {item.children.map((child) => (
                        <TreeItem
                            key={child.nameKey || child.title}
                            item={child}
                            locale={locale}
                        />
                    ))}
                </ul>
            )}
        </li>
    )
}

function FileItem({ item }) {
    return (
        <li>
            <button
                type="button"
                className="button-transition browser-tree__row browser-tree__file"
            >
                <FileIcon
                    size={11}
                    color="var(--gray)"
                />
                <span>{item.title}</span>
            </button>
        </li>
    )
}