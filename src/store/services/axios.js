import axios from "axios";
import getItemFromLocalStorage from "../../utils/GetItemFromLocalstorage";

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    const { response } = error;

    if (
      response &&
      response.status &&
      (response.status === 401 ||
        response.status === 322 ||
        response.status === 423)
    ) {
      const user = getItemFromLocalStorage("user");
      if (user) {
      }
    }
    return Promise.reject(error);
  }
);

export default axios;
