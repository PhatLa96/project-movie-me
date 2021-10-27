import React, { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import TenCumRap from "../../../components/TenCumRap";
import formatDate from "../../../util/fomatDate";
import { logoTheater } from "../../../util/settings/theaterData";
import CountDown from "../Countdown";
import useStyles from "./styles";
import SeatIcon from "@material-ui/icons/CallToActionRounded";
import { color } from "@mui/system";
import createAction from "../../../redux/actions";
import { DatVeType } from "../../../redux/types/ManagerDatVeType";
import { useParams } from "react-router";
import { datGheAction } from "../../../redux/actions/ManagerDatVeAction/DatVeAction";
function ListSeat() {
  const { thongTinPhim, danhSachGhe } = useSelector(
    (state) => state?.DatVeReducer?.arrDatVe
  );
  const { listSeat, refreshKey, listSeatSelectedOthers } = useSelector(
    (state) => state.DatVeReducer
  );

  const Users = useSelector((state) => state.ManagerUserReducer.Users);
  const dispatch = useDispatch();

  const classes = useStyles({ bgLeft: thongTinPhim?.hinhAnh });
  const param = useParams();

  const handleSelected = (seatSelected) => {
    if (seatSelected.daDat) return;
    // let indexGheKD = listSeatSelectedOthers?.findIndex(
    //   (gheDD) => gheDD.maGhe === seatSelected.maGhe
    // );
    // if (indexGheKD !== -1) return;
    const newSeatSelected = listSeat?.map((seat, index) => {
      if (seatSelected.maGhe === seat.maGhe) {
        return { ...seat, selected: !seat.selected };
      }
      return seat;
    });
    console.log("newSeatSelected", newSeatSelected);
    const newListSeatSelected = newSeatSelected?.reduce(
      (newListSeatSelected, seat) => {
        if (seat.selected) {
          return [...newListSeatSelected, seat.label];
        }
        return newListSeatSelected;
      },
      []
    );
    console.log("newListSeatSelected", newListSeatSelected);

    if (newListSeatSelected.length === 11) {
      dispatch(createAction(DatVeType.SET_ALERT_OVER));
      return;
    }

    const danhSachVe = newSeatSelected?.reduce((danhSachVe, seat) => {
      if (seat.selected) {
        return [...danhSachVe, { maGhe: seat.maGhe, giaVe: seat.giaVe }];
      }
      return danhSachVe; // VẤN ĐỀ REALTIME Ở ĐÂY ****************
    }, []);

    const sum = newSeatSelected.reduce((sum, seat) => {
      if (seat.selected) {
        return (sum += seat.giaVe);
      }
      return sum;
    }, 0);
    // kiểm tra có ghế nào được chọn chưa
    const isSelectedSeat = newListSeatSelected.length > 0 ? true : false;
    dispatch(
      datGheAction(
        newSeatSelected,
        newListSeatSelected,
        sum,
        danhSachVe,
        isSelectedSeat,
        param.id
      )
    );
    //   createAction(DatVeType.CHANGE_SELECTED_SEAT, {
    //     listSeat: newSeatSelected,
    //     listSeatSelected: newListSeatSelected,
    //     sum: sum,
    //     danhSachVe: danhSachVe,
    //     isSelectedSeat: isSelectedSeat,
    //   })
    // );
  };
  const Color = (seat) => {
    let color;

    let indexGheKD = listSeatSelectedOthers?.findIndex(
      (gheDD) => gheDD.maGhe === seat.maGhe
    );

    if (seat.loaiGhe === "Thuong") {
      color = "#3e515d";
    }
    if (seat.loaiGhe === "Vip") {
      color = "#f7b500";
    }
    if (seat.selected) {
      color = "#44c020";
    }
    if (seat.daDat) {
      color = "#99c5ff";
    }
    if (Users?.taiKhoan === seat.taiKhoanNguoiDat) {
      color = "rgb(204, 121, 69)";
    }
    // if (indexGheKD !== -1) {
    //   color = "rgb(80, 199, 123)";
    // }

    return color;
  };

  return (
    <div className={classes.root}>
      <div className={classes.InfoCountDown}>
        <div className={classes.InfoTheater}>
          <img
            src={logoTheater[thongTinPhim?.tenCumRap.slice(0, 3).toUpperCase()]}
            alt="movie"
            style={{ width: 50, height: 50 }}
          />
          <div className={classes.InfoTheaterText}>
            <TenCumRap tenCumRap={thongTinPhim?.tenCumRap} />
            <p>{`${formatDate(thongTinPhim?.ngayChieu).dayToday} - ${
              thongTinPhim?.gioChieu
            } - ${thongTinPhim?.tenRap}`}</p>
          </div>
        </div>
        <div className={classes.CountDown}>
          <p>Thời gian giữ ghế</p>
          {/* https://www.npmjs.com/package/react-countdown  key để gọi chạy lại khi resetData trên redux*/}
          {/* <CountDown key={refreshKey} /> */}
        </div>
      </div>

      <div>
        <div>
          <img src="/img/screen/screen.png" alt="" style={{ width: "100%" }} />

          <div className={classes.SeatSection}>
            {listSeat?.map((seat, index) => {
              return (
                <div key={index} className={classes.Seat}>
                  <SeatIcon
                    style={{ color: Color(seat) }}
                    className={classes.seatIcon}
                  />
                  {(index === 0 || index % 16 === 0) && (
                    <p className={classes.label}>{seat.label.slice(0, 1)}</p>
                  )}
                  {seat.selected && (
                    <p className={classes.SelectedNumber}>
                      {seat.label.slice(1) < 10
                        ? seat.label.slice(2)
                        : seat.label.slice(1)}
                    </p>
                  )}
                  {seat.daDat && (
                    <img
                      src="/img/booking-ticket/notchoose.png"
                      className={classes.SeatDisable}
                      alt="seatDaDat"
                    />
                  )}
                  {seat.label === "E06" && (
                    <img
                      src="/img/booking-ticket/seatcenter.png"
                      alt="seatcenter"
                      className={classes.SeatCenter}
                    />
                  )}
                  <div
                    className={classes.areaClick}
                    onClick={() => handleSelected(seat)}
                  ></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* Thông tin các loại ghế */}
      <div className={classes.infoSeat}>
        <div className={classes.infoSeatItem}>
          <div>
            <SeatIcon style={{ color: "#3e515d", fontSize: 27 }} />
            <p>Ghế thường</p>
          </div>
          <div>
            <SeatIcon style={{ color: "#f7b500", fontSize: 27 }} />
            <p>Ghế vip</p>
          </div>
          <div>
            <SeatIcon style={{ color: "#44c020", fontSize: 27 }} />
            <p>Ghế đang chọn</p>
          </div>
          <div style={{ position: "relative" }}>
            <SeatIcon style={{ color: "#99c5ff", fontSize: 27 }} />
            <img
              src="/img/booking-ticket/notchoose.png"
              className={classes.PositionX}
              alt="seatDaDat"
            />
            <p>Ghế đã được chọn</p>
          </div>
          <div style={{ position: "relative" }}>
            <SeatIcon style={{ color: "rgb(204, 121, 69)", fontSize: 27 }} />
            <img
              src="/img/booking-ticket/notchoose.png"
              className={classes.PositionX}
              alt="seatDaDat"
            />
            <p>Ghế bạn vừa chọn</p>
          </div>
        </div>
        <div className={classes.infoView}>
          <span>
            <span className={classes.linecenter} />
            <p>Ghế trung tâm</p>
          </span>
          <span className={classes.line}>
            <span className={classes.linebeautiful} />
            <p>Ghế Đẹp</p>
          </span>
        </div>
      </div>
      {/* modalleft */}
      <div className={classes.bgleft}>
        <div className={classes.opacity}></div>
      </div>
    </div>
  );
}

export default ListSeat;
