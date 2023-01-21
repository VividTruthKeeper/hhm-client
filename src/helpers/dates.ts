export const clockParser = (date: Date) => {
  return date
    .toLocaleDateString('en-GB', {
      hour: '2-digit',
      minute: '2-digit',
    })
    .split(' ')[1];
};

export const dateParser = (date: Date) => {
  return date.toLocaleDateString('ru', {
    month: 'long',
    day: 'numeric',
  });
};
