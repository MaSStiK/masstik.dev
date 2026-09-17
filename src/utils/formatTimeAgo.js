import dayjs from "dayjs"
import relativeTime from "dayjs/plugin/relativeTime"

import "dayjs/locale/ru"
import "dayjs/locale/en"
import "dayjs/locale/fr"

dayjs.extend(relativeTime)

export default function formatTimeAgo(date, locale="en") {
    return dayjs(date).locale(locale).fromNow()
}