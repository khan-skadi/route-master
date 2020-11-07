export const formatTimestamp = (date) => {
  const formattedDate = new Date(
    date.seconds * 1000 + date.nanoseconds / 1000000
  );

  return formattedDate;
};
