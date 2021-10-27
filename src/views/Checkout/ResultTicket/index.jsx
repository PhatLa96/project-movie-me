import React from "react";
import { useSelector } from "react-redux";
import { colorTheater } from "../../../util/settings/theaterData";
import useStyles from "./styles";

function ResultTicket() {
  const {
    arrDatVe: { thongTinPhim },
    listSeatSelected,
    sum,
    email,
    phone,
    bookTicketSuccess,
    paymentMethod,
  } = useSelector((state) => state.DatVeReducer);
  const Users = useSelector((state) => state.ManagerUserReducer.Users);
  const classes = useStyles({
    imgMovie: thongTinPhim?.hinhAnh,
    color: colorTheater[thongTinPhim?.tenCumRap.slice(0, 3).toUpperCase()],
  });
  return (
    <div className={classes.root}>
      <div className={classes.infoTicket}>
        <div className={classes.img}></div>
        <div className={classes.infoTicket_item}>
          <p>{thongTinPhim?.tenPhim}</p>
          <p className={classes.text__first}>
            <span>{thongTinPhim?.tenCumRap.split("-")[0]}</span>
            <span className={classes.text__second}>
              -{thongTinPhim?.tenCumRap.split("-")[1]}
            </span>
          </p>
          <p className={classes.diaChi}>{thongTinPhim?.diaChi}</p>
          <table className={classes.table}>
            <tbody>
              <tr>
                <td valign="top">Suất chiếu:</td>
                <td
                  className={classes.text__first}
                  valign="top"
                >{`${thongTinPhim?.gioChieu} ${thongTinPhim?.ngayChieu}`}</td>
              </tr>
              <tr>
                <td valign="top">Phòng:</td>
                <td className={classes.text__first}>{thongTinPhim?.tenRap}</td>
              </tr>
              <tr>
                <td valign="top">Ghế:</td>
                <td className={classes.text__first}>
                  {listSeatSelected?.join(", ")}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div>
        <div>
          <h3 className={classes.infoResult_label}>Thông tin đặt vé</h3>
          <table className={`${classes.table} table`}>
            <tbody>
              <tr>
                <td valign="top">Họ tên:</td>
                <td>{Users?.hoTen}</td>
              </tr>

              <tr>
                <td valign="top">Email:</td>
                <td>{email}</td>
              </tr>
              <tr>
                <td valign="top">Trạng thái:</td>
                <td>
                  {bookTicketSuccess && (
                    <span>
                      Đặt vé thành công qua{" "}
                      <span className={classes.paymentColor}>
                        {paymentMethod}
                      </span>
                    </span>
                  )}
                  {/* {errorBookTicketMessage && (
                    <span>
                      Đặt vé thất bại:{" "}
                      <span className={classes.errorColor}>
                        {errorBookTicketMessage}
                      </span>
                    </span>
                  )} */}
                </td>
              </tr>
              <tr>
                <td valign="top">Tổng tiền:</td>
                <td valign="top">
                  <span>{`${sum.toLocaleString("vi-VI")} đ`}</span>
                </td>
              </tr>
            </tbody>
          </table>
          {bookTicketSuccess && (
            <p className={classes.noteresult}>
              Kiểm tra lại vé đã mua trong thông tin tài khoản của bạn !
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default ResultTicket;
