import { format } from 'date-fns'

export default ({ app }, inject) => {
    inject('formatDate', (date, formatStr = 'yyyy-MM-dd') => {
        return format(new Date(date), formatStr)
    })
}
