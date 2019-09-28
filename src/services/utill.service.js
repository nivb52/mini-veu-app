export default {
  dayNameFromUTC,
  getCurrLocation
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
