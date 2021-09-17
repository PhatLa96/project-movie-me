import React from "react";
import { useSelector } from "react-redux";
import ThoiLuongDanhGia from "../../../../../components/ThoiLuongDanhGia";
import UseThoiLuongDanhGia from "../../../../../util/useApiThoiLuongDanhGia";
import { customScrollbar } from "../../customScrollbar";
import useStyles from "./styles";
import { underLine } from "../../underline";
import ListPhimTheoNgayChieu from "./ListPhimTheoNgayChieu";
function ListPhim({ lstPhim, hidden }) {
  const classes = useStyles({ underLine, customScrollbar });
  return (
    <div className={classes.listPhim} hidden={hidden}>
      {lstPhim?.map((movie, index) => {
        return (
          <div key={index} className={classes.movieInfo}>
            <div style={{ display: "flex" }}>
              <img
                src={movie.hinhAnh}
                alt="movie"
                style={{ width: 50, height: 50 }}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://picsum.photos/50/50";
                }}
              />
              <div className={classes.textMovie}>
                <p className="m-0" style={{fontSize:18,fontWeight:500,}}>{movie.tenPhim}</p>
                <ThoiLuongDanhGia movie={movie.maPhim} />
              </div>
            </div>
            <div>
              <ListPhimTheoNgayChieu
                lstLichChieuTheoPhim={movie.lstLichChieuTheoPhim}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ListPhim;
