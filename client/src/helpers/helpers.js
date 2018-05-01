export const displayDateTime = (isoDate = '0T0') => {
  const dateTime = isoDate.split('T');
  const dayMonthYear = dateTime[0];
  let timeAsNumber = dateTime[1].split(':').join('');
  while (timeAsNumber.length < 4) {
    timeAsNumber = '0' + timeAsNumber;
  }
  timeAsNumber = `${timeAsNumber.slice(0, 2)}:${timeAsNumber.slice(2)}`;
  return `${dayMonthYear} ${timeAsNumber}`;
}

export const displayAmount = (amount = 1) => {
  return Number(amount).toFixed(2);
}

export const convertIsoDateToNum = (date) => {
  const dateTime = date.split('T')
  const yearMonthDay = dateTime[0].split('-').reverse().join('');
  let timeAsNumber = dateTime[1].split(':').join('');
  while (timeAsNumber.length < 4) {
    timeAsNumber = '0' + timeAsNumber;
  }
  const number = Number(`${yearMonthDay}${timeAsNumber}`);
  return number;
};
