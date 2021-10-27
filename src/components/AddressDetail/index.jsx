import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDatVeAction } from "../../redux/actions/ManagerDatVeAction/DatVeAction";
import UseAddressTheater from "../../util/useApiAddressTheater";

function AddressDetail({ maLichChieu }) {

    const { diaChi } = UseAddressTheater(maLichChieu);

  const style = {
    fontSize: 14,
    color: "#9b9b9b",
  };

  return <div style={style}>{diaChi}</div>;
}

export default AddressDetail;
