import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import {
  getProductDetail,
  getProductDetailEmpty,
} from "../../redux/slice/productsSlice";

const ListProductChild = () => {
  const { t } = useTranslation("common");
  const dispatch = useDispatch();

  const { productId } = useParams();

  const { productDetail, loading, error } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    dispatch(getProductDetail(productId));
    dispatch(getProductDetailEmpty());
  }, [dispatch, productId]);

  return (
    <div>
      <div className="breadcrumb">
        <div className="container">
          <ul className="breadcrumb__inner">
            <li>
              <Link to="/">{t("breadcrumb.home")}</Link>
            </li>
            <li>
              <Link to="/">{t("breadcrumb.productDetail")}</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="shop-detail">
        <div className="container">
          <div className="shop-detail__columns">
            {loading ? (
              <p>Loading...</p>
            ) : error ? (
              <p>{error.message}</p>
            ) : (
              productDetail.map((e, i) => (
                <div className="product-detail" key={i}>
                  <div className="product-detail__img">
                    <Link>
                      <img src={e.image} alt="images" />
                    </Link>
                  </div>
                  <div className="product-detail__desc">
                    <h3 className="product-detail__title">{e.name}</h3>
                    <div className="product-detail__evaluate">
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i
                        className={
                          e.ratings >= 2 ? "fa fa-star" : "fa fa-star-o"
                        }
                        aria-hidden="true"
                      ></i>
                      <i
                        className={
                          e.ratings >= 3 ? "fa fa-star" : "fa fa-star-o"
                        }
                        aria-hidden="true"
                      ></i>
                      <i
                        className={
                          e.ratings >= 4 ? "fa fa-star" : "fa fa-star-o"
                        }
                        aria-hidden="true"
                      ></i>
                      <i
                        className={
                          e.ratings >= 5 ? "fa fa-star" : "fa fa-star-o"
                        }
                        aria-hidden="true"
                      ></i>
                    </div>
                    <div className="product-detail__price">
                      <span className="price">{e.price}</span>
                    </div>
                    <div class="product-detail__description">
                      {e.description}
                    </div>
                    <div class="product-detail__dst">
                      <p>
                        <span>{t("productDetail.sku")}:</span> {e.sku}
                      </p>
                      <p>
                        <span>{t("productDetail.tag")}:</span> {e.tag}
                      </p>
                    </div>
                    <form className="quantity__form">
                      <div className="quantity__inner">
                        <label>{t("productDetail.amount")}:</label>
                        <div className="quantity__number-product">
                          <button className="btn-num" type="button">
                            -
                          </button>
                          <input
                            id="qtym"
                            type="text"
                            maxLength={3}
                            name="quantity"
                            defaultValue={1}
                          />
                          <button className="btn-num" type="button">
                            +
                          </button>
                        </div>
                      </div>
                      <div className="product-detail__btn">
                        <button className="btn__common">
                          {t("product.buy")}
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListProductChild;
