export default {
  dayNameFromUTC,
  setSession,
  getSession
};

function dayNameFromUTC(day) {
  const dayIndex = new Date(day).getUTCDay();
  return [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
  ][dayIndex];
}

async function setSession(data, key = "favorites") {
  sessionStorage.setItem(key, JSON.stringify(data));
}
function getSession(key = "favorites") {
  return JSON.parse(sessionStorage.getItem(key)) || null;
}

