import React from "react";
import { useHistory } from "react-router";
import useStyles from "./styles";
import useApiThoiLuongDanhGia from "../../../../../util/useApiThoiLuongDanhGia";
import { Link } from "react-router-dom";
import "./film.scss";
import BtnPlayTrailer from "../../../../../components/BtnPlayTrailer";
function Film({ film, comingMovie }) {
  const classes = useStyles({ bg: film.hinhAnh, comingMovie });
  const history = useHistory();
  const { thoiLuong } = useApiThoiLuongDanhGia(film.maPhim);
  console.log(film);

  return (
    <div
      style={{
        padding: "7px",
        cursor: "pointer",
      }}
    >
      <div className="film">
        <div className="film__img">
          <div className={`film__poster ${classes.addbg}`}>
            <div
              className="film__overlay"
              onClick={() =>
                history.push(`/detail/${film.maPhim}`, { comingMovie })
              }
            />
            <div className="play__trailer">
              <BtnPlayTrailer
                cssRoot={"play"}
                width={48}
                height={48}
                urlYoutube={film.trailer}
              />
            </div>
          </div>
          {/* <BlockRating danhGia={movie.danhGia} /> */}
        </div>
        <div className="film__content">
          <div className={`film__name ${thoiLuong ? "" : "not_hide"}`}>
            <div className="name">
              <p>
                <span className="c18">C18</span>
                {film.tenPhim}
              </p>
            </div>
            <p className="pt-2">
              {thoiLuong ? (
                <span className="text_info">
                  {thoiLuong} phút - Tix {film.danhGia}
                </span>
              ) : (
                <span className="text_info">Tix {film.danhGia}</span>
              )}
            </p>
          </div>
          <div className={`film__button`}>
            {/* nếu thoiLuong = undefined => phim hiện không có lịch chiếu */}
            {(thoiLuong || comingMovie) && (
              <Link
                to={{
                  pathname: `/detail/${film.maPhim}`,
                }}
              ></Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Film;
