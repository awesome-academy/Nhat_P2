import { createSlice } from "@reduxjs/toolkit";
// import { createSelector } from "reselect";

function setItemLocalStorage(products) {
  localStorage.removeItem("listProduct");
  localStorage.setItem("listProduct", JSON.stringify(products));
}

function getListProductLocalStorage() {
  let products = localStorage.getItem("listProduct");
  if (!products) return [];
  products = JSON.parse(products);
  if (products) return products;
  return [];
}

const currentProduct = createSlice({
  name: "currentProduct",
  initialState: {
    listProduct: getListProductLocalStorage(),
    totalPayment: 0,
    totalProduct: 0,
  },
  reducers: {
    getAddToCart: (state, action) => {
      // state.numberOfProduct += 1;
      // localStorage.setItem("numberOfProduct", state.numberOfProduct);

      const index = state.listProduct.findIndex(
        (e) => e.id === action.payload.id
      );

      if (index === -1) {
        state.listProduct.push(action.payload);
        state.totalProduct = state.listProduct.map((e) => e.price * e.quantity);
        const reducer = (ac, cu) => ac + cu;
        state.totalProduct = state.totalProduct.reduce(reducer);
      } else {
        state.listProduct[index].quantity += 1;
        state.totalProduct = state.listProduct.map((e) => e.price * e.quantity);
        const reducer = (ac, cu) => ac + cu;
        state.totalProduct = state.totalProduct.reduce(reducer);
      }
      setItemLocalStorage(state.listProduct);
      localStorage.setItem("totalProduct", JSON.stringify(state.totalProduct));
    },
    getRemoveProduct: (state, action) => {
      state.listProduct = state.listProduct.filter(
        (p) => p.id !== action.payload
      );
      localStorage.setItem("totalPayment", JSON.stringify(state.totalPayment));
    },
    changeQuantityProduct: (state, action) => {
      const { id, quantity } = action.payload;
      state.listProduct = state.listProduct.map((p) =>
        p.id !== id ? { ...p } : { ...p, quantity }
      );
      state.totalPayment = state.listProduct.map((e) => e.price * e.quantity);
      const reducer = (ac, cu) => ac + cu;
      state.totalPayment = state.totalPayment.reduce(reducer);
      setItemLocalStorage(state.listProduct);
      localStorage.setItem("totalPayment", JSON.stringify(state.totalPayment));
    },
    getCancelOrder: (state, action) => {
      state.listProduct = [];
      state.totalPayment = 0;
      localStorage.setItem("totalPayment", state.listProduct);
    },
  },
});
const { reducer: currentProductReducer, actions } = currentProduct;

// export const productsSelector = (state) => state.currentProduct.listProduct;

// export const totalProduct = createSelector(
//   productsSelector,
//   (products) => products.length
// );

// export const totalQuantity = createSelector(productsSelector, (items) =>
//   items.reduce((acc, item) => acc + item.quantity, 0)
// );

// var result = 0;
// export const intoMoney = createSelector(productsSelector, (e) =>
//   e.map((e, i) => (result += e.price * e.quantity))
// );

export const {
  getAddToCart,
  getRemoveProduct,
  changeQuantityProduct,
  // totalQuantity,
  getCancelOrder,
} = actions;
export default currentProductReducer;
