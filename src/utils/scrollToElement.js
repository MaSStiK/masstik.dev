// Прокрутка к элементу по ID
export default function scrollToElement(id) {
    document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
        block: "start"
    })
}