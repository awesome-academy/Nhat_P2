import React from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory, useLocation } from "react-router-dom";
import { getCancelOrder } from "../../redux/slice/currentProduct";
import {
  getRemoveProduct,
  changeQuantityProduct,
} from "../../redux/slice/currentProduct";

const CartChild = () => {
  const { t } = useTranslation("common");
  const history = useHistory();
  const dispatch = useDispatch();
  const location = useLocation();

  const { totalPayment, listProduct } = useSelector(
    (state) => state.currentProduct
  );

  const handlechangeQuantityProduct = (id, quantity) => {
    if (quantity <= 0) return;
    dispatch(changeQuantityProduct({ id, quantity }));
  };

  const handleContinue = () => {
    if (location.pathname === "/cart") {
      if (totalPayment === 0) {
        alert("Vui lòng mua sản phẩm");
      } else {
        history.push("/payment");
      }
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
          <h2 className="title__head">{t("cart.cart")}</h2>
          <div className="cart__wrap">
            <form className="cart__form" action="#">
              <table className="cart__table">
                <thead className="cart__columns">
                  <tr>
                    <th className="cart__columns--img">{t("cart.image")}</th>
                    <th className="cart__columns--name">{t("cart.name")}</th>
                    <th className="cart__columns--price">
                      {t("cart.unitPrice")}
                    </th>
                    <th className="cart__columns--quatity">
                      {t("cart.quantity")}
                    </th>
                    <th className="cart__columns--total">
                      {t("cart.intoMoney")}
                    </th>
                    <th className="cart__columns--remove">
                      {t("cart.delete")}
                    </th>
                  </tr>
                </thead>

                <tbody className="cart__product">
                  {listProduct.map((e, i) => (
                    <tr key={i}>
                      <td className="cart__product--img" data-title="hình ảnh">
                        <Link to="/">
                          <img src={e.image} alt="images" />
                        </Link>
                      </td>
                      <td
                        className="cart__product--name"
                        data-title="tên sản phẩm"
                      >
                        <Link to="/">{e.name}</Link>
                      </td>
                      <td className="cart__product--price" data-title="đơn giá">
                        <span className="unit-amount">{e.price}</span>
                      </td>
                      <td
                        className="cart__product--quantity"
                        data-title="số lượng"
                      >
                        <div className="quantity-box">
                          <button
                            className="btn-addminus"
                            onClick={(ev) => {
                              ev.preventDefault();
                              handlechangeQuantityProduct(e.id, e.quantity - 1);
                            }}
                          >
                            <i className="fa fa-minus" aria-hidden="true"></i>
                          </button>
                          <input
                            type="number"
                            value={e.quantity}
                            onChange={(ev) => {
                              handlechangeQuantityProduct(
                                e.id,
                                ev.target.value
                              );
                            }}
                          />
                          <button
                            className="btn-addminus"
                            onClick={(ev) => {
                              ev.preventDefault();
                              handlechangeQuantityProduct(e.id, e.quantity + 1);
                            }}
                          >
                            <i className="fa fa-plus" aria-hidden="true"></i>
                          </button>
                        </div>
                      </td>
                      <td
                        className="cart__product--total"
                        data-title="thành tiền"
                      >
                        <span className="subtotal-amount">
                          {e.quantity * e.price}
                        </span>
                      </td>

                      <td className="cart__product--remove" data-title="xóa">
                        <span
                          onClick={() => dispatch(getRemoveProduct(e))}
                          className="fa fa fa-trash"
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </form>
            <table className="total__payment">
              <tbody>
                <tr>
                  <td>{t("cart.totalPayment")}</td>
                  <td>{totalPayment}</td>
                </tr>
              </tbody>
            </table>
            <div className="cart__btn">
              <button
                className="btn__common"
                onClick={(el) => {
                  dispatch(getCancelOrder());
                  el.preventDefault();
                }}
              >
                {t("cart.cancelOrder")}
              </button>
              <Link to="/list-product-sidebar" className="btn__common">
                {t("cart.continue")}
              </Link>
              <button onClick={handleContinue} className="btn__common">
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
