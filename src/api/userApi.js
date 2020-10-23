import axiosClient from "./axiosClient";

const userApi = {
  getUser: () => {
    const url = "/users";
    return axiosClient.get(url);
  },
  getUsers: (userId) => {
    const url = `/users/${userId}`;
    return axiosClient.get(url);
  },
  postUser: (newUser) => {
    const url = `/users`;
    return axiosClient.post(url, newUser);
  },
  deleteUser: (userId) => {
    const url = `/users/${userId}`;
    return axiosClient.delete(url);
  },
  putUser: (userId, newUser) => {
    const url = `/users/${userId}`;
    return axiosClient.put(url, newUser);
  },
};

export default userApi;
