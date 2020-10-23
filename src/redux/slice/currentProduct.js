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
    listProduct: [],
    totalPayment: 0,
    currentPayment: "",
    categories: "",
    numberOfProduct: 0,
    totalOfProduct: 0,
    payment: "",
  },
  reducers: {
    getType: (state, action) => {},
    getAddToCart: (state, action) => {
      state.numberOfProduct += 1;
      localStorage.setItem("numberOfProduct", state.numberOfProduct);

      const index = state.listProduct.findIndex(
        (e) => e.id === action.payload.id
      );

      if (index === -1) {
        state.listProduct.push(action.payload);
        // alert("Bạn muốn mua sản phẩm này");

        state.totalPayment = state.listProduct.map((e) => e.price * e.quantity);
        state.totalPayment = state.totalPayment.reduce((ac, cu) => ac + cu, 0);
      } else {
        state.listProduct[index].quantity += 1;

        state.totalPayment = state.listProduct.map((e) => e.price * e.quantity);
        state.totalPayment = state.totalPayment.reduce((ac, cu) => ac + cu, 0);
      }
      localStorage.setItem("listProduct", JSON.stringify(state.totalPayment));
      localStorage.setItem("totalPayment", JSON.stringify(state.totalPayment));
    },
    getRemoveProduct: (state, action) => {
      state.listProduct = state.listProduct.filter(
        (e) => e.id !== action.payload.id
      );
      state.totalOfProduct = action.payload.price * action.payload.quantity;
      state.totalPayment = state.totalPayment - state.totalOfProduct;
      state.numberOfProduct = state.numberOfProduct - action.payload.quantity;

      localStorage.setItem("totalPayment", JSON.stringify(state.totalPayment));
    },
    changeQuantityProduct: (state, action) => {
      const { id, quantity } = action.payload;

      state.listProduct = state.listProduct.map((p) =>
        p.id !== id ? { ...p } : { ...p, quantity }
      );

      state.numberOfProduct = state.listProduct.map((el) => el.quantity);
      state.numberOfProduct = state.numberOfProduct.reduce((a, b) => a + b, 0);

      state.totalPayment = state.listProduct.map((e) => e.price * e.quantity);
      state.totalPayment = state.totalPayment.reduce((ac, cu) => ac + cu, 0);

      localStorage.setItem(
        "numberOfProduct",
        JSON.stringify(state.totalPayment)
      );
      localStorage.setItem("listProduct", JSON.stringify(state.totalPayment));
      localStorage.setItem("totalPayment", JSON.stringify(state.totalPayment));
    },
    getCancelOrder: (state, action) => {
      state.listProduct = [];
      state.totalPayment = 0;
      localStorage.setItem("totalPayment", state.listProduct);
    },
    getCurrentPayment: (state, action) => {
      state.currentPayment = action.payload;
      localStorage.setItem("payment", state.currentPayment);
    },
    getRemoveInCart: (state, action) => {
      state.listProduct = [];
      state.totalPayment = 0;
      state.numberOfProduct = 0;
      localStorage.setItem("totalPayment", state.listProduct);
    },
  },
});
const { reducer: currentProductReducer, actions } = currentProduct;
// console.log(currentProduct);

// export const productsSelector = (state) => state.currentProduct.listProduct;
// export const totalProduct = createSelector(
//   productsSelector,
//   (products) => products.length
// );
// export const totalQuantity = createSelector(productsSelector, (items) =>
//   items.reduce((acc, item) => acc + item.quantity, 0)
// );

export const {
  getType,
  getAddToCart,
  getRemoveProduct,
  changeQuantityProduct,
  // totalQuantity,
  getCancelOrder,
  getCurrentPayment,
  getRemoveInCart,
} = actions;
export default currentProductReducer;
