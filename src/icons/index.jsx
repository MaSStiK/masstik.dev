export const LockIcon = ({ size = 24, ...props }) => {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            {...props}
        >
            <path d="M5 6.5V5a3 3 0 0 1 6 0v1.5h.25A1.75 1.75 0 0 1 13 8.25v5A1.75 1.75 0 0 1 11.25 15h-6.5A1.75 1.75 0 0 1 3 13.25v-5A1.75 1.75 0 0 1 4.75 6.5H5Zm1.4 0h3.2V5a1.6 1.6 0 1 0-3.2 0v1.5Z"/>
        </svg>
    )
}

export const FolderIcon = ({ size = 24, ...props }) => {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            {...props}
        >
            <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>
        </svg>
    )
}

export const FileIcon = ({ size = 24, ...props }) => {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            {...props}
        >
            <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
            <polyline points="13 2 13 9 20 9" />
        </svg>
    )
}

export const GridIcon = ({ size = 24, ...props }) => {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            {...props}
        >
            <rect x="3" y="3" width="7" height="7" />
            <rect x="14" y="3" width="7" height="7" />
            <rect x="3" y="14" width="7" height="7" />
            <rect x="14" y="14" width="7" height="7" />
        </svg>
    )
}

export const TransparencyIcon = ({ size = 24, transparent = false, ...props }) => {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            {...props}
        >
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <path d="M3 9h18M9 21V9" strokeDasharray={transparent ? "0" : "3 2"} />
        </svg>
    )
}