export const formatTime = (value: number) => {
  const hour = Math.trunc(value / 60);
  const minutes = value % 60;
  return `${hour}ч ${minutes}м`;
};
