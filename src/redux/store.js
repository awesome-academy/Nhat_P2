import { configureStore } from "@reduxjs/toolkit";
import i18nReducer from "./slice/i18nSlice";
import productsReducer from "./slice/productsSlice";
import blogReducer from "./slice/blogSlice";
import sliderReducer from "./slice/sliderSlice";
import currentProductReducer from "./slice/currentProduct";
import registerReducer from "./slice/registerSlice";
import loginReducer from "./slice/loginSlice";
import userReducer from "./slice/adminUserManagementSlice";
import newCartReducer from "./slice/adminNewCartManagementSlice";
import userAddEditReducer from "./slice/adminUserAddEditSlice";
import searchProductsReducer from "./slice/searchProductSlice";
import productAddEditReducer from "./slice/adminProductAddEditSlice";

const store = configureStore({
  reducer: {
    i18n: i18nReducer,
    products: productsReducer,
    searchProduct: searchProductsReducer,
    blog: blogReducer,
    slider: sliderReducer,
    currentProduct: currentProductReducer,
    login: loginReducer,
    register: registerReducer,
    user: userReducer,
    listNewCart: newCartReducer,
    userAddEdit: userAddEditReducer,
    productAddEdit: productAddEditReducer,
  },
});
export default store;
