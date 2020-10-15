import axiosClient from "./axiosClient";

const productsApi = {
  getProducts: () => {
    const url = "/products";
    return axiosClient.get(url);
  },
  getProductsHome: () => {
    const url = "/products?_page=1&_limit=8";
    return axiosClient.get(url);
  },
  getProductDetail: (productId) => {
    const url = `/products/${productId}`;
    return axiosClient.get(url);
  },
};

export default productsApi;
