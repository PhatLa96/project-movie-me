import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import createAction from "../../redux/actions";
import { LazyType } from "../../redux/types/ManagerLazyType";

function LazyLoading() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(createAction(LazyType.LOADING_LAZY_MOUNT));
    return () => {
      dispatch(createAction(LazyType.LOADING_LAZY_UNMOUNT));
    };
  }, []);
  return <div></div>;
}

export default LazyLoading;
