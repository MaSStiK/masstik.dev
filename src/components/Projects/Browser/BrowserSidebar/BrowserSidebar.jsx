import { useState } from "react"
import { Triangle } from "lucide-react"
import { FolderIcon, FileIcon } from "@/icons"
import browserTreeData from "@/data/browserTreeData"
import projectTypeColors from "@/data/projectTypeColors"

import "./BrowserSidebar.css"

import useLocale from "@/hooks/useLocale"

// TODO: Также добавить кол-во проектов с правого края папки

export default function BrowserSidebar() {
    const locale = useLocale()

    return (
        <aside className="browser__sidebar">
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
    return <FileItem item={item} locale={locale} />
}

function FolderItem({ item, locale }) {
    const [isOpen, setIsOpen] = useState(true)

    return (
        <li>
            <button
                type="button"
                className="button-transition browser-tree__folder"
                style={{ "--accent-color": projectTypeColors[item.projectType] }}
                onClick={() => setIsOpen(!isOpen)}
            >
                <Triangle
                    size={8}
                    color="var(--gray)"
                    className={`folder-triangle ${isOpen ? "folder-triangle--open" : ""}`}
                />

                <FolderIcon
                    size={13}
                    className="folder-icon"
                />

                <span>{`${locale.projects.tree[item.nameKey]}/`}</span>
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
            <button type="button-transition button" className="browser-tree__file">
                <FileIcon
                    size={11}
                    color="var(--gray)"
                />
                <span>{item.title}</span>
            </button>
        </li>
    )
}