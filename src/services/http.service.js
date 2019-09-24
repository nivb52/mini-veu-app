import router from "@/router";
import axios from "axios";

export default {
  get(BASE_URL, endpoint, data) {
    return ajax(BASE_URL, endpoint, "GET", null, data);
  }
  // post(BASE_URL, endpoint, data) {
  //     return ajax(endpoint, 'POST', data);
  // },
  // put(BASE_URL, endpoint, data) {
  //     return ajax(endpoint, 'PUT', data);
  // },
  // delete(BASE_URL, endpoint, data) {
  //     return ajax(endpoint, 'DELETE', data);
  // }
};

async function ajax(
  BASE_URL,
  endpoint,
  method = "get",
  data = null,
  params = null
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
    if (err.response.status === 401) {
      router.push("/");
      throw err;
    }
  }
}
