export function formatDate(date) {
  date = date || Date()
  let theDate = new Date(date);
  let d = theDate.toLocaleDateString("en-CA")
  let t = theDate.toLocaleTimeString("ru-RU")
  return {
    datetime: d + ' ' + t,
    date: d,
    time: t,
  };
}