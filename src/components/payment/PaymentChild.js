import React from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import newCartApi from "../../api/newCartApi";
import {
  getCurrentPayment,
  getRemoveInCart,
} from "../../redux/slice/currentProduct";

const CartChild = () => {
  const { t } = useTranslation("common");
  const history = useHistory();
  const dispatch = useDispatch();

  const { totalPayment, listProduct, currentPayment } = useSelector(
    (state) => state.currentProduct
  );
  const { email } = useSelector((state) => state.login);

  const handleSelectPay = (value) => {
    dispatch(getCurrentPayment(value));
  };

  const handlePayment = async () => {
    if (currentPayment) {
      const newCart = {
        totalPayment,
        listProduct,
        currentPayment,
        email,
      };
      await newCartApi.postNewCart(newCart);
      alert("Thanh toán thành công");
      localStorage.removeItem("totalPayment");
      localStorage.removeItem("listProduct");
      localStorage.removeItem("payment");
      dispatch(getRemoveInCart());
      history.push("/");
    } else {
      alert("Vui lòng chọn phương thức thanh toán");
    }
  };

  return (
    <div className="shop-cart">
      <div className="breadcrumb">
        <div className="container">
          <ul className="breadcrumb__inner">
            <li>
              <Link to="/">{t("breadcrumb.home")}</Link>
            </li>
            <li>
              <Link to="/">{t("breadcrumb.cart")}</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="shop-cart">
        <div className="container">
          <h2 className="title__head">Bill</h2>
          <form className="bill">
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {listProduct.map((e, i) => (
                  <tr>
                    <td>{e.name}</td>
                    <td>{e.quantity}</td>
                    <td>{e.price}</td>
                    <td>{e.quantity * e.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="bill__totalPayment">
              <div className="bill__totalPayment--title">Total Payment</div>
              <div className="bill__totalPayment--tp">{totalPayment}</div>
            </div>
          </form>
          <div className="payments">
            <h2 className="title__head">Payment</h2>
            <div className="payments__border">
              <fieldset className="form__group">
                <select
                  value={currentPayment}
                  onChange={(el) => handleSelectPay(el.target.value)}
                >
                  <option value="" disabled=""></option>
                  <option value="ATM">ATM</option>
                  <option value="MoMo">MoMo</option>
                  <option value="Internet Banking">Internet Banking</option>
                </select>
              </fieldset>
              <button
                onClick={(el) => {
                  handlePayment();
                  el.preventDefault();
                }}
                className="btn__common"
              >
                {t("cart.pay")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartChild;
