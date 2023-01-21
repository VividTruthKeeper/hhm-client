export const clockParser = (date: Date) => {
  return date
    .toLocaleDateString('en-GB', {
      hour: '2-digit',
      minute: '2-digit',
    })
    .split(' ')[1];
};
