
import axios from "axios";

export default {
  get(BASE_URL, endpoint, data) {
    return ajax(BASE_URL, endpoint, "GET", null, data);
  }
};

async function ajax(
  BASE_URL,  endpoint,
  method = "get",  data = null,  params = null
) {
  try {
    const res = await axios({
      url: `${BASE_URL}${endpoint}`,
      method,
      data,
      params
    });
    return res.data;
  } catch (err) {
    throw err;
  }
}
