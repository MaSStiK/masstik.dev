import { ChevronRight, ChevronDown } from "lucide-react"
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
        return (
            <FolderItem
                item={item}
                locale={locale}
            />
        )
    }

    return (
        <FileItem
            item={item}
            locale={locale}
        />
    )
}

function FolderItem({ item, locale }) {
    return (
        <li>
            <button
                type="button"
                className="browser-tree__folder"
                style={{"--accent-color": projectTypeColors[item.projectType]}}
            >
                <ChevronDown
                    size={16}
                    color="var(--gray)"
                />
                <FolderIcon size={13} />
                <span>{`${locale.projects.tree[item.nameKey]}/`}</span>
            </button>

            {item.children && (
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

function FileItem({ item, locale }) {
    return (
        <li>
            <button type="button" className="browser-tree__file">
                <FileIcon
                    size={11}
                    color="var(--gray)"
                />
                <span>{item.title}</span>
            </button>
        </li>
    )
}