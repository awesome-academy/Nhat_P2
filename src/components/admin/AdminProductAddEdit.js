import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import HeaderTopBar from "../partials/HeaderTopBar";
import {
  postProduct,
  getProductDetail,
  putProduct,
} from "../../redux/slice/adminProductAddEditSlice";

export default function AdminUserAddEdit() {
  const { t } = useTranslation("common");
  const history = useHistory();
  const dispatch = useDispatch();

  const { productId } = useParams();
  const { successError, loading, loadingGetUser, error } = useSelector(
    (state) => state.userAddEdit
  );

  const [product, setProduct] = useState({
    image: "",
    name: "",
    ratings: "",
    price: "",
    description: "",
    categories: "",
    gender: "",
    sku: "",
    tag: "",
    quantity: "",
  });

  useEffect(() => {
    if (productId) {
      async function getDataProduct() {
        const response = await dispatch(getProductDetail(productId));
        if (!response.error) {
          setProduct({
            image: response.payload.image,
            name: response.payload.name,
            ratings: response.payload.ratings,
            price: response.payload.price,
            description: response.payload.description,
            categories: response.payload.categories,
            gender: response.payload.gender,
            sku: response.payload.sku,
            tag: response.payload.tag,
            quantity: response.payload.quantity,
          });
        }
      }
      getDataProduct();
    }
  }, [dispatch, productId]);

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!productId) {
      console.log(productId);
      const response = await dispatch(postProduct(product));
      if (response.error) {
        alert(response.error.message);
      } else if (response.payload.length) {
        alert(response.payload);
      } else {
        alert("Thêm sản phẩm thành công");
        history.push("/admin-product-management");
      }
    } else {
      await dispatch(putProduct({ productId, product }));
      alert("Chỉnh sửa sản phẩm thành công");
      history.push("/admin-product-management");
    }
  };

  return (
    <div>
      <HeaderTopBar />
      <div className="admin__add-edit">
        <div className="container">
          <div className="admin__frames">
            <form onSubmit={onSubmit}>
              <div className="admin__frames--grid">
                <fieldset className="form__group">
                  <label>
                    {t("editAddProduct.image")}
                    <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    value={product.image}
                    onChange={(e) =>
                      setProduct({ ...product, image: e.target.value })
                    }
                  />
                </fieldset>
                <fieldset className="form__group">
                  <label>
                    {t("editAddProduct.name")}
                    <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    value={product.name}
                    onChange={(e) =>
                      setProduct({ ...product, name: e.target.value })
                    }
                  />
                </fieldset>
                <fieldset className="form__group">
                  <label>
                    {t("editAddProduct.rating")}
                    <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    value={product.ratings}
                    onChange={(e) =>
                      setProduct({ ...product, ratings: e.target.value })
                    }
                  />
                </fieldset>
                <fieldset className="form__group">
                  <label>
                    {t("editAddProduct.price")}
                    <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    value={product.price}
                    onChange={(e) =>
                      setProduct({ ...product, price: e.target.value })
                    }
                  />
                </fieldset>
                <fieldset className="form__group">
                  <label>
                    {t("editAddProduct.sku")}
                    <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    value={product.sku}
                    onChange={(e) =>
                      setProduct({ ...product, sku: e.target.value })
                    }
                  />
                </fieldset>
                <fieldset className="form__group">
                  <label>
                    {t("editAddProduct.tag")}
                    <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    value={product.tag}
                    onChange={(e) =>
                      setProduct({ ...product, tag: e.target.value })
                    }
                  />
                </fieldset>
              </div>
              <fieldset className="form__group">
                <label>
                  {t("editAddProduct.description")}
                  <span className="required">*</span>
                </label>
                <textarea
                  type="text"
                  value={product.description}
                  onChange={(e) =>
                    setProduct({ ...product, description: e.target.value })
                  }
                />
              </fieldset>
              <div className="register__btn">
                <button className="btn__common" type="submit">
                  {loading ? (
                    <i className="fas fa-spinner fa-spin"></i>
                  ) : error ? (
                    "1"
                  ) : successError.length ? (
                    "2"
                  ) : productId ? (
                    t("editAddProduct.buttonEditProduct")
                  ) : (
                    t("editAddProduct.buttonAddProduct")
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
