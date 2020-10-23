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
  // getCategoriesProduct: (categories) => {
  //   const url = `/products?categories=${categories}`;
  //   return axiosClient.get(url);
  // },
  getProductDetail: (productId) => {
    const url = `/products/${productId}`;
    return axiosClient.get(url);
  },
  getProductSearch: (searchProduct) => {
    const url = `/products?q=${searchProduct}`;
    return axiosClient.get(url);
  },
  postProduct: (newProduct) => {
    const url = `/products`;
    return axiosClient.post(url, newProduct);
  },
  deleteProduct: (productId) => {
    const url = `/products/${productId}`;
    return axiosClient.delete(url);
  },
  putProduct: (productId, newProduct) => {
    const url = `/products/${productId}`;
    return axiosClient.put(url, newProduct);
  },
};

export default productsApi;
