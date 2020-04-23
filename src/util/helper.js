export const truncate = (string, count) => {
  return string.length > count ? string.substring(0, count - 1) + '..' : string;
};
