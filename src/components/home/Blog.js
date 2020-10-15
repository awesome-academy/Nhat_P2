import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { getBlog } from "../../redux/slice/blogSlice";
import { Link } from "react-router-dom";
const Blog = () => {
  const { t } = useTranslation("common");
  const dispatch = useDispatch();
  const { blog, loading, error } = useSelector((state) => state.blog);

  useEffect(() => {
    dispatch(getBlog());
  }, [dispatch]);

  return (
    <div className="blog">
      <div className="container">
        <div className="title__section">
          <h2 className="title__green">{t("titleSection.blog")}</h2>
        </div>
        <div className="blog-grid__columns">
          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p>{error.message}</p>
          ) : (
            blog.map((e, i) => (
              <article className="blog-grid__box" key={i}>
                <div className="blog-grid__img">
                  <Link to="/">
                    <img src={e.image} alt="images" />
                  </Link>
                </div>
                <div className="blog-grid__content">
                  <span className="blog-grid__date">{e.date}</span>
                  <h3 className="blog-grid__title">
                    <Link to="/">{e.title}</Link>
                  </h3>
                  <p>{e.content}</p>
                  <div className="blog-grid__read-more">
                    <Link to="/">Đọc tiếp</Link>
                  </div>
                </div>
              </article>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
export default Blog;
