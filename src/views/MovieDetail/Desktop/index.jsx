import { Button, CircularProgress, Typography } from "@material-ui/core";
import moment from "moment";
import React, { useState } from "react";
import { useParams } from "react-router";
import BtnPlayTrailer from "../../../components/BtnPlayTrailer";
import UseThoiLuongDanhGia from "../../../util/useApiThoiLuongDanhGia";
import useStyles from "./styles";
import Rating from "@material-ui/lab/Rating";
import TableShowTime from "../TableShowTime";
function Desktop({ arrDetail }) {
  const classes = useStyles({ bannerImg: arrDetail.hinhAnh });
  const param = useParams();
  const { thoiLuong, danhGia } = UseThoiLuongDanhGia(param.id);
  const [onClickBtnMuaVe, setOnClickBtnMuaVe] = useState(0);
  const handleBtnMuaVe = () => {
    setOnClickBtnMuaVe(Date.now());
  };
  return (
    <div className={classes.desktop}>
      <div className={classes.top}>
        <div className={classes.before}>{/* phủ một lớp đen mờ */}</div>
        <div className={classes.bannerImage}></div>
        <div className={classes.topInfo}>
          <div className={classes.imgTrailer}>
            <div className={classes.btnTrailer}>
              <BtnPlayTrailer urlYoutube={arrDetail?.trailer} />
            </div>
            <img
              src={arrDetail.hinhAnh}
              alt="poster"
              style={{ width: 250, height: 300 }}
              onError={(e) => {
                e.target.onerror = null;
              }}
            />
          </div>
          <div className={classes.showInfo}>
            <Typography>
              {" "}
              {moment(arrDetail.ngayKhoiChieu).format("DD.MM.YYYY")}
            </Typography>
            <Typography className={classes.movieName}>
              <span className={classes.c18}>C18</span>
              {arrDetail.tenPhim}
            </Typography>
            <Typography>
              {`${thoiLuong ?? "120"} phút - ${danhGia} Tix`} - 2D/Digital
            </Typography>
            <Button onClick={handleBtnMuaVe} className={classes.btnMuaVe}>
              Mua Vé
            </Button>
          </div>
          <div className={classes.rating}>
            <div className={classes.circular}>
              <span className={classes.danhGia}>{danhGia}</span>

              <CircularProgress
                variant="determinate"
                size="100%"
                value={danhGia * 10}
                className={classes.fabProgress}
                color="secondary"
              />
            </div>
            <div className={classes.rateStar}>
              <Rating value={(danhGia * 5) / 10} precision={0.5} readOnly />
            </div>
          </div>
        </div>
      </div>
      <TableShowTime onClickBtnMuaVe={onClickBtnMuaVe} arrDetail={arrDetail} />
    </div>
  );
}

export default Desktop;
