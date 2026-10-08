// Скрытие отмеченных секций Markdown
export default function remarkHideSections() {
    return tree => {
        let isHidden = false

        // Фильтрация элементов между маркерами скрытия
        tree.children = tree.children.filter(node => {
            if (
                node.type === "html" &&
                node.value.includes("<!-- portfolio:hide:start -->")
            ) {
                isHidden = true
                return false
            }

            if (
                node.type === "html" &&
                node.value.includes("<!-- portfolio:hide:end -->")
            ) {
                isHidden = false
                return false
            }

            return !isHidden
        })
    }
}