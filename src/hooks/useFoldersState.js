import { atom, useAtom } from "jotai"
import categories from "@/data/categories"

// Создаём объект вида { commercial: true, personal: true }
const initialFoldersState = Object.fromEntries(
    Object.keys(categories)
        .filter(category => categories[category].showInTree)
        .map(category => [category, true])
)

const foldersStateAtom = atom(initialFoldersState)

export default function useFoldersState() {
    const [foldersState, setFoldersState] = useAtom(foldersStateAtom)

    // Переключение состояния папки
    const toggleFolder = category => {
        setFoldersState(prev => ({
            ...prev,
            [category]: !prev[category]
        }))
    }

    // Ручная установка состояния
    const setFolderOpen = (category, isOpen) => {
        setFoldersState(prev => ({
            ...prev,
            [category]: isOpen
        }))
    }

    return {
        foldersState,
        toggleFolder,
        setFolderOpen
    }
}