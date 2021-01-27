import axios from "axios";
const list = () => axios.get("/urls");

const create = (payload) => axios.post("/urls", payload);

const show = (slug) => axios.get(`/urls/${slug}`);

const pinUrl = (slug) => axios.patch(`urls/${slug}`);

const urlsApi = {
  list,
  create,
  show,
  pinUrl,
};

export default urlsApi;
