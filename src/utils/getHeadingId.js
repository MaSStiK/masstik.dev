export default function getHeadingId(text) {
    return text
        .toLowerCase()
        .replace(/\p{Extended_Pictographic}/gu, "")
        .replace(/\uFE0F/g, "")
        .replace(/[^\p{L}\p{N}\s-]/gu, "")
        .trim()
        .replace(/\s+/g, "-")
}