export const belongsToNextWeek = (date: Date): boolean => {
  const currentDate = new Date();

  const currentWeekStart = new Date(currentDate);
  currentWeekStart.setDate(currentDate.getDate() - currentDate.getDay());

  const nextWeekStart = new Date(currentWeekStart);
  nextWeekStart.setDate(nextWeekStart.getDate() + 7);

  return (
    date >= nextWeekStart &&
    date < new Date(nextWeekStart.setDate(nextWeekStart.getDate() + 7))
  );
};

export const belongsToNextMonth = (date: Date): boolean => {
  const currentDate = new Date();

  const currentMonth = currentDate.getMonth();
  const dateMonth = date.getMonth();

  const currentYear = currentDate.getFullYear();
  const dateYear = date.getFullYear();

  return dateYear === currentYear && dateMonth === (currentMonth + 1) % 12;
};
