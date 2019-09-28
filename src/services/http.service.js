
import axios from "axios";

export default {
  get(BASE_URL, endpoint, data) {
    return ajax(BASE_URL, endpoint, "GET", null, data);
  }
};

async function ajax(  BASE_URL,  endpoint,
  method = "get",  data = null,  params = null) {
  try {
    const res = await axios({
      config: {headers: {"Accept-Encoding": "gzip"}},
      url: `${BASE_URL}${endpoint}`,
      method,
      data,
      params
    });
    if (res.status >= 200 && res.status < 300) return res.data;
    else return error.response
  } catch (err) {
    return error.response
  }
}