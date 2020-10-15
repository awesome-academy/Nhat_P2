import axiosClient from "./axiosClient";

const sliderApi = {
  getSlider: () => {
    const url = "/slider";
    return axiosClient.get(url);
  },
};

export default sliderApi;
