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

const todayNow = moment();
const todayMidnight = moment().endOf('day');
let timeToMidNightSeconds = todayMidnight.diff(todayNow, 'seconds');


const endDate = moment("20221003");

const days = addWeekdays(endDate);

document.querySelector('#number-of-days-left').textContent = `${days}`;

const isWeekend = (day) => {
    return day.isoWeekday() === 6 || day.isoWeekday() === 7;
}

if (!isWeekend(todayNow)) {
    const formattedHour = moment(timeToMidNightSeconds * 1000).format('HH');
    const formattedMinutes = moment(timeToMidNightSeconds * 1000).format('mm');
    const formattedSeconds = moment(timeToMidNightSeconds * 1000).format('ss');

    document.querySelector('#seconds-left').textContent = `${formattedHour} hrs ${formattedMinutes} min ${formattedSeconds} sec`;
    timeToMidNightSeconds--;

    setInterval(() => {
        const formattedHour = moment(timeToMidNightSeconds * 1000).format('HH');
        const formattedMinutes = moment(timeToMidNightSeconds * 1000).format('mm');
        const formattedSeconds = moment(timeToMidNightSeconds * 1000).format('ss');


        document.querySelector('#seconds-left').textContent = `${formattedHour} hrs ${formattedMinutes} min ${formattedSeconds} sec`;
        timeToMidNightSeconds--;
    }, 1000);
}
