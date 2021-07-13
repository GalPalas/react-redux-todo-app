import axios from "axios";
import * as actions from "../api";

const api =
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    if (action.type !== actions.apiCallBegan.type) return next(action);

    next(action);

    try {
      const response = await axios.request({
        baseURL: "http://localhost:7001/todos",
      });
      dispatch(actions.apiCallSuccess(response.data));
    } catch (err) {
      dispatch(actions.apiCallFailed(err.message));
    }
  };

export default api;
