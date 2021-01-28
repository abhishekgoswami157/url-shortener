import axios from "axios";

const create = (payload) => axios.post("/reports", payload);

const reportsApi = {
  create,
};

export default reportsApi;
