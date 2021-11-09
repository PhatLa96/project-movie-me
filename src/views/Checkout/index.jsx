import { Box, Container, Grid } from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { connection } from "../..";
import createAction from "../../redux/actions";
import { getDatVeAction } from "../../redux/actions/ManagerDatVeAction/DatVeAction";
import { DatVeType } from "../../redux/types/ManagerDatVeType";
import InfoTicket from "./InfoTicket";
import ListSeat from "./ListSeat";
import Modal from "./Modal";
import StepperBox from "./StepperBox";
import _ from "lodash";
function CheckOut() {
  const {
    loadingDatVe,
    arrDatVe: { thongTinPhim, danhSachGhe },
  } = useSelector((state) => state.DatVeReducer);

  console.log("loadingDatVe", loadingDatVe);
  const Users = useSelector((state) => state.ManagerUserReducer.Users);
  const dispatch = useDispatch();
  const param = useParams();

  useEffect(() => {
    dispatch(getDatVeAction(param.id));
    //Có 1 client nào thực hiện việc đặt vé thành công mình sẽ load lại danh sách phòng vé của lịch chiếu đó
    // connection.on("datVeThanhCong", () => {
    //   dispatch(getDatVeAction(param.id));
    // });
    //Vừa vào trang load tất cả ghế của các người khác đang đặt
    // connection.invoke("loadDanhSachGhe", param.id);
    //Load danh sách ghế đang đặt từ server về (luôn luôn lắng nghe tín hiệu từ server trả về và tự động chạy)
    // connection.on("loadDanhSachGheDaDat", (dsGheKhachDat) => {
    //   console.log("danhSachGheKhachDatabc", dsGheKhachDat);
    // Bước 1: Loại mình ra khỏi danh sách
    // dsGheKhachDat = dsGheKhachDat.filter(
    //   (item) => item.taiKhoan !== Users?.taiKhoan
    // );
    //Bước 2 gộp danh sách ghế khách đặt ở tất cả user thành 1 mảng chung
    // console.log("dsGheKhachDat", dsGheKhachDat);
    // let arrGheKhachDat = dsGheKhachDat.reduce((result, item, index) => {
    //   let arrGhe = JSON.parse(item.danhSachGhe);

    //   return [...result, ...arrGhe];
    // }, []);

    //Đưa dữ liệu ghế khách đặt cập nhật redux
    // arrGheKhachDat = _.uniqBy(arrGheKhachDat, "maGhe");
    // console.log("arrGheKhachDat", arrGheKhachDat);
    //Đưa dữ liệu ghế khách đặt về redux
    // dispatch(
    //   createAction(DatVeType.DAT_GHE, { arrGheKhachDat })
    // );
    // });
    //Cài đặt sự kiện khi reload trang
    // window.addEventListener("beforeunload", clearGhe);

    // return () => {
    //   clearGhe();
    //   window.removeEventListener("beforeunload", clearGhe);
    // };
    return () => {
      dispatch(createAction(DatVeType.RESET_DATA_BOOKTICKET));
    };
  }, []);
  // const clearGhe = function (event) {
  //   connection.invoke("huyDat", Users.taiKhoan, param.id);
  // };
  useEffect(() => {
    let UnitCode = 64;
    const ListSeatEdit = danhSachGhe?.map((seat, index) => {
      if (index % 16 === 0) UnitCode++;
      const alphabet = String.fromCharCode(UnitCode);
      const number = ((index % 16) + 1).toString().padStart(2, 0);
      return { ...seat, label: alphabet + number, selected: false };
    });
    dispatch(
      createAction(DatVeType.EDIT_LIST_SEAT, {
        listSeat: ListSeatEdit,
        email: Users?.email,
        phone: Users?.soDT,
        taiKhoan: Users?.taiKhoan,
        maLichChieu: thongTinPhim?.maLichChieu,
      })
    );
  }, [Users, danhSachGhe]);
  return (
    <div>
      <Box>
        <Grid container>
          <Grid item md={9}>
            <StepperBox />
            <ListSeat />
          </Grid>
          <Grid item md={3}>
            <InfoTicket />
          </Grid>
        </Grid>
      </Box>
      <Modal />
    </div>
  );
}

export default CheckOut;
