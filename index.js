function addWeekdays(endDate) {
    let days = 0;
    const clonedEndDate = moment(endDate);
    let today = moment();
    while (today.format('YYYY-MM-DD') != clonedEndDate.format('YYYY-MM-DD')) {
        today = today.add(1, 'days');
        if (today.isoWeekday() !== 6 && today.isoWeekday() !== 7) {
            days += 1
        }
    }
    return days;
}

let todayNow = moment().utc();
const todayMidnight = moment().endOf('day').utc();

const endDate = moment("20220916");

const days = addWeekdays(endDate);

document.querySelector('#number-of-days-left').textContent = `${days}`;

const isWeekend = (day) => {
    return day.isoWeekday() === 6 || day.isoWeekday() === 7;
}

if (!isWeekend(todayNow)) {
    const formattedHour = todayMidnight.diff(todayNow, 'hours')
    const formattedMinutes = todayMidnight.diff(todayNow, 'minutes') % 60;
    const formattedSeconds = todayMidnight.diff(todayNow, 'seconds') % 60;

    document.querySelector('#seconds-left').textContent = `${formattedHour} hrs ${formattedMinutes} min ${formattedSeconds} sec`;
    todayNow = moment().utc();

    setInterval(() => {
        const formattedHour = todayMidnight.diff(todayNow, 'hours')
        const formattedMinutes = todayMidnight.diff(todayNow, 'minutes') % 60;
        const formattedSeconds = todayMidnight.diff(todayNow, 'seconds') % 60;

        document.querySelector('#seconds-left').textContent = `${formattedHour} hrs ${formattedMinutes} min ${formattedSeconds} sec`;
        todayNow = moment().utc();
    }, 1000);
}
