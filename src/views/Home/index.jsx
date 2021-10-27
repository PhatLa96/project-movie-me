import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { GetMovieListAction } from "../../redux/actions/ManagerMovieAction/MovieAction";
import { GetTheaterList } from "../../redux/actions/ManagerTheaterAction/TheaterAction";
import Carousel from "./Carousel";
import HomeApp from "./HomeApp";
import News from "./News";
import ShowMovie from "./ShowMovie";
import Theater from "./Theater";

function Home() {
  const dispatch = useDispatch();
  const { arrMovie } = useSelector((state) => state.MovieListReducer);

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(GetMovieListAction);
    dispatch(GetTheaterList);
  }, []);

  return (
    <div>
      <Carousel arrMovie={arrMovie} />
      <ShowMovie />
      <Theater />
      <News />
      <HomeApp />
    </div>
  );
}

export default Home;
