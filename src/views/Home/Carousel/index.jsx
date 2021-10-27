import React, { Component, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Slider from "react-slick";
import { GetCarouselAction } from "../../../redux/actions/ManagerMovieAction/CarouseActionl";
import useStyles from "./styles";
import ArrowBackIosRoundedIcon from "@material-ui/icons/ArrowBackIosRounded";
import ArrowForwardIosRoundedIcon from "@material-ui/icons/ArrowForwardIosRounded";
import "./carousel.css";
import SearchBarCarousel from "./SearchBarCarousel";
import createAction from "../../../redux/actions";
import { LazyType } from "../../../redux/types/ManagerLazyType";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
function Carousel({ arrMovie }) {
  const { arrBanner } = useSelector((state) => state.CarouselReducer);
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const classes = useStyles({ isDesktop });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetCarouselAction);
    dispatch(createAction(LazyType.LOADING_BACKTO_HOME_COMPLETED));
  }, []);
  function NextArrow(props) {
    const { onClick } = props;
    return (
      <ArrowForwardIosRoundedIcon
        style={{ right: "15px" }}
        onClick={onClick}
        className={classes.Arrow}
      />
    );
  }

  function PrevArrow(props) {
    const { onClick } = props;
    return (
      <ArrowBackIosRoundedIcon
        style={{ left: "15px" }}
        onClick={onClick}
        className={classes.Arrow}
      />
    );
  }
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    dotsClass: "slickdotsbanner",
  };
  return (
    <div className={classes.carousel}>
      <Slider {...settings}>
        {arrBanner?.map((banner, index) => {
          return (
            <div key={index}>
              <img src={banner.hinhAnh} alt="banner" className={classes.img} />
            </div>
          );
        })}
      </Slider>
      <SearchBarCarousel arrMovie={arrMovie} />
    </div>
  );
}
export default Carousel;
