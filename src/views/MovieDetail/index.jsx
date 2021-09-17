import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { GetDetailShowTime } from "../../redux/actions/ManagerTheaterAction/DetailAction";
import Desktop from "./Desktop";

function MovieDetail(props) {
  const { arrDetail } = useSelector((state) => state.DetailReducer);
  console.log(arrDetail);
  const dispatch = useDispatch();
  const param = useParams();
  console.log(param);
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
