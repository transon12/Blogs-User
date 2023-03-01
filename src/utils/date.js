import moment from 'moment';

const displayDate = (date) => {
    return moment(date).format('DD/MM/YYYY')
}

const trimStartDate = (date) => {
    return moment(startDate).startOf('day').toISOString();
}

const trimEndDate = (date) => {
    return moment(endDate).endOf('day').toISOString();
}

export { displayDate, trimStartDate, trimEndDate }