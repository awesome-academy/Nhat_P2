import React, { useEffect } from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { useDispatch, useSelector } from "react-redux";
import { getSlider } from "../../redux/slice/sliderSlice";

const Slide = () => {
  const dispatch = useDispatch();

  const { slider, loading, error } = useSelector((state) => state.slider);

  useEffect(() => {
    dispatch(getSlider());
  }, [dispatch]);

  return (
    <div className="slider">
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error.message}</p>
      ) : (
        <Fade>
          {slider.map((e, i) => (
            <div className="slider__image" key={i}>
              <img src={e.image} alt="images" />
            </div>
          ))}
        </Fade>
      )}
    </div>
  );
};

export default Slide;
