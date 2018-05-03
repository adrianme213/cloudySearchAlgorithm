export const displayDateTime = (isoDate = 'exit') => {
  const isoDateTimeRegex = /^[0-3]\d-[01]\d-\d{4}T[0-2]?\d:[0-5]\d$/;
  if (typeof isoDate !== 'string' || !isoDateTimeRegex.test(isoDate)) { return -1 }
  const dateTime = isoDate.split('T');
  const dayMonthYear = dateTime[0];
  let timeAsNumber = dateTime[1].split(':').join('');
  while (timeAsNumber.length < 4) {
    timeAsNumber = '0' + timeAsNumber;
  }
  timeAsNumber = `${timeAsNumber.slice(0, 2)}:${timeAsNumber.slice(2)}`;
  return `${dayMonthYear} ${timeAsNumber}`;
}

export const displayAmount = (amount = 'exit') => {
  if (typeof amount !== 'number') { return -1 }
  return amount.toFixed(2);
}

export const convertIsoDateToNum = (date = 'exit') => {
  const isoDateTimeRegex = /^[0-3]\d-[01]\d-\d{4}T[0-2]?\d:[0-5]\d$/;
  if (typeof date !== 'string' || !isoDateTimeRegex.test(date)) { return -1 }
  const dateTime = date.split('T')
  const yearMonthDay = dateTime[0].split('-').reverse().join('');
  let timeAsNumber = dateTime[1].split(':').join('');
  while (timeAsNumber.length < 4) {
    timeAsNumber = '0' + timeAsNumber;
  }
  const number = Number(`${yearMonthDay}${timeAsNumber}`);
  return number;
};
