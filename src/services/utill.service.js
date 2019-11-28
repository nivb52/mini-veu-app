export default {
  dayNameFromUTC,
  setSession,
  getSession,
  storageStore,
  storageLoad
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


function storageStore(key, data) {
    localStorage[key] = JSON.stringify(data)
}

function storageLoad(key) {
  var str = localStorage[key] || "null";
  if (str === "undefined") return false;
  else return JSON.parse(str);
}

