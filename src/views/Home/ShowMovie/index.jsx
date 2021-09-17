import { AppBar, Tab, Tabs } from "@material-ui/core";
import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import Movie from "./Movies";
import useStyles from "./styles";
function ShowMovie() {
  const timeout = useRef(null);
  const DATE_BEGIN_DANGCHIEU = "2020-01-01"; // format: yyyy-mm-dd
  const DATE_END_DANGCHIEU = "2020-12-01";

  const DATE_BEGIN_SAPCHIEU = "2020-12-02";
  const DATE_END_SAPCHIEU = new Date().toISOString()?.slice(0, 10);
  console.log(DATE_END_SAPCHIEU);
  const [value, setValue] = useState({ value: 0, fade: true, active: 0 });
  const classes = useStyles({
    value: value.value,
    fade: value.fade,
    active: value.active,
  });
  useEffect(() => {
    return () => {
      clearTimeout(timeout.current);
    };
  }, []);
  const { arrMovie } = useSelector((state) => state.MovieListReducer);
  const [arrData, setArrData] = useState({
    dailyMoiveList: null,
    comingMovieList: null,
  });
  const filterDay = (arrMovie, tuNgay, denNgay) => {
    return arrMovie.filter((movie) => {
      const timeMovie = new Date(movie.ngayKhoiChieu).getTime();
      const timeTuNgay = new Date(tuNgay).getTime();
      const timeDenNgay = new Date(denNgay).getTime();
      if (timeTuNgay <= timeMovie && timeMovie <= timeDenNgay) {
        return true;
      }
      return false;
    });
  };
  console.log(arrData);
  useEffect(() => {
    let dailyMovie = filterDay(
      arrMovie,
      DATE_BEGIN_DANGCHIEU,
      DATE_END_DANGCHIEU
    );
    dailyMovie = dailyMovie?.slice(0, 16);
    let comingMovie = filterDay(
      arrMovie,
      DATE_BEGIN_SAPCHIEU,
      DATE_END_SAPCHIEU
    );
    comingMovie = comingMovie?.slice(0, 16);
    setArrData({ dailyMovie, comingMovie });
  }, [arrMovie]);
  const handleChange = (event, newValue) => {
    setValue((value) => ({ ...value, active: newValue, fade: false })); // newValue có giá trị là 0 hoặc 1 k thay đổi value dùng để active DangdChieu hoặc SapChieu
    timeout.current = setTimeout(() => {
      // sau thời gian 100ms setValue thay đổi giá trị của value thành 1 hoặc 0 để render dailyMovie hoặc comingMovie fade thành true
      setValue((value) => ({ ...value, value: newValue, fade: true })); // thay đổi value thành 1(hiện comingMovie) fade thành true opacity 1 hiện lên
    }, 100);
    console.log(timeout.current);
    console.log(newValue);
  };

  return (
    <div>
      <AppBar className={classes.appBar} position="static">
        <Tabs
          classes={{
            root: classes.tabBar,
            flexContainer: classes.flexContainer,
            indicator: classes.indicator,
          }}
          onChange={handleChange}
          value={value.value}
        >
          <Tab className={classes.tabDangChieu} label="Đang chiếu" />
          <Tab className={classes.tabSapChieu} label="Sắp chiếu" />
        </Tabs>
      </AppBar>
      <div className={classes.listMovie}>
        <Movie movieData={arrData} value={value} />
      </div>
    </div>
  );
}

export default ShowMovie;
