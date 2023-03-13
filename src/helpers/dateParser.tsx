export const dateParse = (date: string) => {
  try {
    const splitArr = date.split(' ');
    const dateYear = splitArr[0];
    const dateYearSplit = dateYear.split('-');
    const finalDate = `${dateYearSplit[2]}.${dateYearSplit[1]}.${dateYearSplit[0]}`;
    return finalDate;
  } catch (err) {
    return date;
  }
};
