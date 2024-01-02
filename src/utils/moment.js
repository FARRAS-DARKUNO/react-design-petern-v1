import moment from 'moment';

export const convertTime = (datetime) => {
const formattedDate = moment(datetime).format('dddd, D MMMM YYYY, HH:mm')

return formattedDate
}