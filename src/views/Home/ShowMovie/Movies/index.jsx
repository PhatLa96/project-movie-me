import React from "react";
import Slider from "react-slick";
import Film from "./Films";
import ArrowBackIosRoundedIcon from "@material-ui/icons/ArrowBackIosRounded";
import ArrowForwardIosRoundedIcon from "@material-ui/icons/ArrowForwardIosRounded";
import useStyles from "./styles";
export function NextArrow(props) {
  const classes = useStyles();
  const { onClick } = props;
  return (
    <ArrowForwardIosRoundedIcon
      style={{ right: "-82px" }}
      onClick={onClick}
      className={classes.Arrow}
    />
  );
}

export function PrevArrow(props) {
  const classes = useStyles();
  const { onClick } = props;
  return (
    <ArrowBackIosRoundedIcon
      style={{ left: "-82px" }}
      onClick={onClick}
      className={classes.Arrow}
    />
  );
}
function Movie({ movieData, value }) {
  const classes = useStyles();

  const settings = {

    slidesToShow: 1,
    speed: 500,
    rows: 2,
    slidesPerRow: 4,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <div className={classes.container}>
      <Slider {...settings}>
        {value.value === 0
          ? movieData.dailyMovie?.map((film, index) => {
              return (
                <div key={index}>
                  <Film film={film} />
                </div>
              );
            })
          : movieData.comingMovie?.map((film, index) => {
              return (
                <div key={index}>
                  <Film film={film} comingMovie />
                </div>
              );
            })}
      </Slider>
    </div>
  );
}

export default Movie;
