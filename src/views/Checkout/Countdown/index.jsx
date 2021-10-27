import React, { useMemo } from "react";

import { useSelector, useDispatch } from "react-redux";
import Countdown, { zeroPad } from "react-countdown";
import createAction from "../../../redux/actions";
import { DatVeType } from "../../../redux/types/ManagerDatVeType";

export default function CountDown() {
  const { bookTicketSuccess } = useSelector((state) => state.DatVeReducer);
  const dispatch = useDispatch();
  const setTimeCount = useMemo(() => {
    // dùng useMemo để không bị reset
    return Date.now() + 300000;
  }, []);

  const handleTimeOut = () => {
    // chỉ mở modal khi chưa click đặt vé
    if (!bookTicketSuccess) {
      dispatch(createAction(DatVeType.TIMEOUT));
    }
  };
  const style = {
    fontWeight: 500,
    fontSize: 34,
    color: "#fb4226",
    lineHeight: "39px",
  };
  return (
    <Countdown
      date={setTimeCount}
      renderer={({ minutes, seconds }) => (
        <span style={style}>
          {zeroPad(minutes)}:{zeroPad(seconds)}
        </span>
      )}
      onComplete={() => handleTimeOut()}
    />
  );
}
