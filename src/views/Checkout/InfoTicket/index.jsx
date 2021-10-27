import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import createAction from "../../../redux/actions";
import { thongTinDatVe } from "../../../redux/actions/ManagerDatVeAction/DatVeAction";
import { DatVeType } from "../../../redux/types/ManagerDatVeType";
import formatDate from "../../../util/fomatDate";
import useStyles from "./styles";

function InfoTicket() {
  const Users = useSelector((state) => state.ManagerUserReducer.Users);

  const { thongTinPhim, danhSachGhe } = useSelector(
    (state) => state?.DatVeReducer?.arrDatVe
  );
  const dispatch = useDispatch();
  const {
    danhSachGheDangDat,
    listSeat,
    sum,
    email,
    danhSachVe,
    maLichChieu,
    isSelectedSeat,
    isReadyPayment,
    paymentMethod,
  } = useSelector((state) => state?.DatVeReducer);
  const classes = useStyles({ isReadyPayment, isSelectedSeat });

  const [formValues, setFormValues] = useState({
    values: {
      paymentMethod: paymentMethod,
    },
  });

  const handleChange = (event) => {
    let { value, name } = event.target;
    let newValue = { ...formValues, [name]: value };
    setFormValues((formValues) => ({
      ...formValues,
      values: newValue,
    }));
  };
  useEffect(() => {
    dispatch(
      createAction(DatVeType.SET_DATA_TICKET_PAYMENT, {
        paymentMethod: formValues.values.paymentMethod,
      })
    );
    if (formValues.values.paymentMethod && isSelectedSeat) {
      dispatch(
        createAction(DatVeType.SET_READY_TO_PAYMENT, {
          isReadyPayment: true,
          activeStep: 1,
        })
      );
    } else {
      dispatch(
        createAction(DatVeType.SET_READY_TO_PAYMENT, {
          isReadyPayment: false,
          activeStep: 0,
        })
      );
    }
  }, [formValues, formValues]);

  useEffect(() => {
    // cập nhật lại data email, phone và validation khi reload

    setFormValues((formValues) => ({
      ...formValues,
      values: {
        paymentMethod: paymentMethod,
      },
    }));
  }, [listSeat]);

  const handleBookticket = () => {
    if (isReadyPayment) {
      dispatch(thongTinDatVe({ maLichChieu, danhSachVe }));
    }
  };
  return (
    <div className={classes.infoTicket}>
      <div>
        <h1 className={`${classes.TicketItem} ${classes.Amount}`}>
          {`${sum.toLocaleString("vi-VI")} đ`}
        </h1>

        <div className={classes.TicketItem}>
          <p className={classes.tenPhim}>{thongTinPhim?.tenPhim}</p>
          <p>{thongTinPhim?.tenCumRap}</p>
          <p>
            {`${formatDate(thongTinPhim?.ngayChieu).dayToday} , ${
              thongTinPhim?.ngayChieu
            }`}{" "}
            - {thongTinPhim?.gioChieu} - {thongTinPhim?.tenRap}
          </p>
        </div>

        <div className={`${classes.TicketItem} ${classes.seatInfo}`}>
          <span>{`Ghế ${danhSachGheDangDat?.join(", ")}`}</span>
          <p className={classes.amountLittle}>
            {`${sum.toLocaleString("vi-VI")} đ`}
          </p>
        </div>

        <div className={classes.TicketItem}>
          <p className={classes.titleInfo}>Email</p>
          <p>{email}</p>
        </div>

        <div className={classes.TicketItem}>
          <p className={classes.titleInfo}>Phone</p>
          <p>0123456789</p>
        </div>

        <div className={classes.TicketItem}>
          <label className={classes.titleInfo}>Mã giảm giá</label>
          <input
            type="text"
            value="Tạm thời không hỗ trợ..."
            readOnly
            className={classes.fillIn}
          />
          <button className={classes.btnDiscount} disabled>
            Áp dụng
          </button>
        </div>

        <div className={classes.TicketItem}>
          <label className={classes.titleInfo}>Hình thức thanh toán</label>

          <div className={classes.formPayment}>
            <div className={classes.formPaymentItem}>
              <p className={classes.toggleNotice}>
                Vui lòng chọn ghế để hiển thị phương thức thanh toán phù hợp.
              </p>
              <input
                className={classes.input}
                type="radio"
                name="paymentMethod"
                value="ZaloPay"
                onChange={handleChange}
                checked={formValues.values.paymentMethod === "ZaloPay"}
              />
              <img
                className={classes.img}
                src="/img/booking-ticket/zalo.jpg"
                alt="zalopay"
              />
              <label>Thanh toán qua ZaloPay</label>
            </div>
            <div className={classes.formPaymentItem}>
              <input
                className={classes.input}
                type="radio"
                name="paymentMethod"
                value="Visa, Master, JCB"
                onChange={handleChange}
                checked={
                  formValues.values.paymentMethod === "Visa, Master, JCB"
                }
              />
              <img
                className={classes.img}
                src="/img/booking-ticket/visa.png"
                alt="visa"
              />
              <label>Visa, Master, JCB</label>
            </div>
            <div className={classes.formPaymentItem}>
              <input
                className={classes.input}
                type="radio"
                name="paymentMethod"
                value="ATM nội địa"
                onChange={handleChange}
                checked={formValues.values.paymentMethod === "ATM nội địa"}
              />
              <img
                className={classes.img}
                src="/img/booking-ticket/atm.png"
                alt="atm"
              />
              <label>Thẻ ATM nội địa</label>
            </div>
            <div className={classes.formPaymentItem}>
              <input
                className={classes.input}
                type="radio"
                name="paymentMethod"
                value="Cửa hàng tiện ích"
                onChange={handleChange}
                checked={
                  formValues.values.paymentMethod === "Cửa hàng tiện ích"
                }
              />
              <img
                className={classes.img}
                src="/img/booking-ticket/cuahang.png"
                alt="cuahang"
              />
              <label>Thanh toán tại cửa hàng tiện ích</label>
            </div>
          </div>
        </div>

        <div className={classes.bottomSection}>
          <button
            className={classes.btnDatVe}
            disabled={!isReadyPayment}
            onClick={handleBookticket}
          >
            <p className={classes.txtDatVe}>Đặt Vé</p>
          </button>
        </div>
        <div className={classes.notice}>
          <img
            className={classes.imgNotice}
            src="/img/booking-ticket/exclamation.png"
            alt="notice"
          />
          <span>Vé đã mua không thể đổi hoặc hoàn tiền</span>
          <p>
            Mã vé sẽ được gửi qua tin nhắn{" "}
            <span className={classes.contactColor}>ZMS</span> (tin nhắn Zalo) và{" "}
            <span className={classes.contactColor}>Email</span> đã nhập.
          </p>
        </div>
      </div>
    </div>
  );
}

export default InfoTicket;
