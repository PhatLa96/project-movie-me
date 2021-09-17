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
  const { arrTheater } = useSelector((state) => state.TheaterReducer);

  console.log(arrMovie);
  console.log(arrTheater);
  useEffect(() => {
    dispatch(GetMovieListAction);
    dispatch(GetTheaterList);
  }, []);
  return (
    <div>
      <Carousel />
      <ShowMovie />
      <Theater />
      <News />
      <HomeApp />
    
    </div>
  );
}

export default Home;
