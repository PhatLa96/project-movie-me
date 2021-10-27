import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router";
import { GetDetailShowTime } from "../../redux/actions/ManagerTheaterAction/DetailAction";
import Desktop from "./Desktop";

function MovieDetail(props) {
  const { arrDetail } = useSelector((state) => state.DetailReducer);
  const location = useLocation();

  const dispatch = useDispatch();
  const param = useParams();

  useEffect(() => {
    dispatch(GetDetailShowTime(param.id));
  }, []);
  return (
    <Fragment>
      <Desktop arrDetail={arrDetail} />
    </Fragment>
  );
}

export default MovieDetail;
