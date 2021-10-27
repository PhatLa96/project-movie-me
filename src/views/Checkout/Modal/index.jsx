import { Button } from "@material-ui/core";
import Dialog from "@mui/material/Dialog";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import createAction from "../../../redux/actions";
import { getDatVeAction } from "../../../redux/actions/ManagerDatVeAction/DatVeAction";
import { DatVeType } from "../../../redux/types/ManagerDatVeType";
import ResultTicket from "../ResultTicket";
import useStyles from "./styles";

export default function Modal() {
  const { bookTicketSuccess, timeOut, alertOver } = useSelector(
    (state) => state.DatVeReducer
  );
  const isBookTicket = bookTicketSuccess ? true : false;
  const classes = useStyles();
  const dispatch = useDispatch();
  const param = useParams();
  const history = useHistory();
  const handleClickBackHome = () => {
    dispatch(createAction(DatVeType.RESET_DATA_BOOKTICKET));
    history.push("/", "header");
  };
  const handleClickReBooking = () => {
    if (isBookTicket) {
      dispatch(getDatVeAction(param.id));
    }
    dispatch(createAction(DatVeType.RESET_DATA_BOOKTICKET));
  };
  const handleTimeOut = () => {
    dispatch(createAction(DatVeType.RESET_DATA_BOOKTICKET));
    dispatch(getDatVeAction(param.id));
  };
  const handleAlertOver = () => {
    dispatch(createAction(DatVeType.RESET_ALERT_OVER));
  };
  return (
    <div>
      <Dialog
        open={isBookTicket || timeOut || alertOver}
        maxWidth="md"
        classes={{ paper: classes.paper }}
      >
        {timeOut && !isBookTicket && (
          <div style={{ padding: 40 }}>
            <p>
              Đã hết thời gian giữ ghế. Vui lòng thực hiện đơn hàng trong thời
              hạn 5 phút.
              <span className={classes.txtClick} onClick={handleTimeOut}>
                Đặt vé lại
              </span>
            </p>
          </div>
        )}
        {isBookTicket && (
          <div style={{ padding: 30 }}>
            <ResultTicket />
            <div className={classes.ButtonResult}>
              <Button
                onClick={handleClickReBooking}
                className={classes.ButtonResultItem}
              >
                MUA THÊM VÉ PHIM NÀY
              </Button>
              <Button
                onClick={handleClickBackHome}
                className={classes.ButtonResultItem}
              >
                QUAY VỀ TRANG CHỦ
              </Button>
            </div>
          </div>
        )}
        {alertOver && (
          <div className={classes.over10}>
            <div className={classes.notification}>
              <img
                width="100%"
                src="/img/booking-ticket/Post-notification.png"
                alt="Post-notification"
              />
            </div>
            <p className={classes.textOver}>Bạn không thể chọn quá 10 ghế</p>
            <Button
              variant="outlined"
              classes={{ root: classes.btnOver }}
              onClick={handleAlertOver}
            >
              ok
            </Button>
          </div>
        )}
      </Dialog>
    </div>
  );
}
