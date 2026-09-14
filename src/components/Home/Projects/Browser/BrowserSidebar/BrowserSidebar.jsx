import Image from "next/image"
import { ChevronRight, ChevronDown } from "lucide-react"
import treeData from "./treeData"

import "./BrowserSidebar.css"
import useLocale from "@/hooks/useLocale"

// Также добавить кол-во проектов с правого края папки

export default function BrowserSidebar() {
    const locale = useLocale()
    return (
        <aside className="browser__sidebar">
            <ul className="browser-tree">
                {treeData.map((item) => (
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
    return (
        <li className="browser-tree__item">
            <button type="button" className="browser-tree__row">
                {item.children && <ChevronDown size={20} color="var(--gray)" />}
                {!item.children && <ChevronRight size={20} color="var(--gray)" />}
                <Image
                    src={item.icon}
                    alt=""
                    width={20}
                    height={20}
                />
                <span>{locale.projects.tree[item.nameKey]}</span>
            </button>

            {item.children && (
                <ul className="browser-tree__children">
                    {item.children.map((child) => (
                        <TreeItem
                            key={child.nameKey}
                            item={child}
                            locale={locale}
                        />
                    ))}
                </ul>
            )}
        </li>
    )
}