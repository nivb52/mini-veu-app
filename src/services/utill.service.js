
export default {
    dayNameFromUTC
  };

function dayNameFromUTC(day) {
    const dayIndex =  new Date(day).getUTCDay()
    return ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"][dayIndex];
  }