export const storageService = {
  store,
  load
};

function store(key, data) {
    localStorage[key] = JSON.stringify(data)
}

function load(key) {
  var str = localStorage[key] || "null";
  if (str === "undefined") return false;
  else return JSON.parse(str);
}
