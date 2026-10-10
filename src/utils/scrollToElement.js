// Прокрутка к элементу по ID
export default function scrollToElement(id, containerId) {
    const element = document.getElementById(id)
    if (!element) return

    if (!containerId) {
        element.scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
        return
    }

    const container = document.getElementById(containerId)
    if (!container || !container.contains(element)) return

    const top = container.scrollTop
        + element.getBoundingClientRect().top
        - container.getBoundingClientRect().top
        - container.clientTop

    container.scrollTo({
        top,
        behavior: "smooth"
    })
}