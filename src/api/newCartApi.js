import axiosClient from "./axiosClient";

const newCartApi = {
  getNewCart: () => {
    const url = "/newcarts";
    return axiosClient.get(url);
  },

  deleteNewCart: (newCartId) => {
    const url = `/newcarts/${newCartId}`;
    return axiosClient.delete(url);
  },

  postNewCart: (newCart) => {
    const url = `/newcarts/`;
    return axiosClient.post(url, newCart);
  },
};

export default newCartApi;
