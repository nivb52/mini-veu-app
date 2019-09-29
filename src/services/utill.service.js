export default {
  dayNameFromUTC,
  getCurrLocation,
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

function getCurrLocation() {
  navigator.geolocation.getCurrentPosition(pos => {
    const {latitude, longitude} = pos.coords
    return {latitude, longitude};
  });
}

async function setSession(data,key= 'favorites'){
  sessionStorage.setItem(key, JSON.stringify(data));
}
function getSession(key = 'favorites'){
  return JSON.parse(sessionStorage.getItem(key)) || null;
}