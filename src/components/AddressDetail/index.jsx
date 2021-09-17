import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDatVeAction } from "../../redux/actions/ManagerDatVeAction/DatVeAction";
import UseAddressTheater from "../../util/useApiAddressTheater";

function AddressDetail({ maLichChieu }) {
  const { arrDatVe } = useSelector((state) => state.DatVeReducer);

//   console.log(arrDatVe);
//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(getDatVeAction(maLichChieu));
//   }, []);
    const { diaChi } = UseAddressTheater(maLichChieu);
    console.log(diaChi);
  const style = {
    fontSize: 14,
    color: "#9b9b9b",
  };
  console.log(maLichChieu);
  return <div style={style}>{diaChi}</div>;
}

export default AddressDetail;
