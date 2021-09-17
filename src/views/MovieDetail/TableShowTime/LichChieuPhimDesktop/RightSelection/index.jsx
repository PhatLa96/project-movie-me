import React, { Fragment, useState } from "react";
import AddressDetail from "../../../../../components/AddressDetail";
import BtnGoCheckOut from "../../../../../components/BtnGoCheckOut";
import FakeImgTheater from "../../../../../components/FakeImgTheater";
import TenCumRap from "../../../../../components/TenCumRap";
import formatDate from "../../../../../util/fomatDate";
import useStyles from "./styles";

function RightSelection({ cumRapChieu }) {
  const classes = useStyles();
  const [indexSelected, setindexSelected] = useState(0);
  const arrayAllLichChieuPhim = cumRapChieu.reduce((colect, item) => {
    return [
      // lọc ra tất cả lịch chiếu phim của từng hệ thống rạp từng cụm rạp
      ...colect,
      ...item.lichChieuPhim.map((lichChieu) => ({
        ...lichChieu,
        tenCumRap: item.tenCumRap,
      })),
    ];
  }, []);
  console.log(arrayAllLichChieuPhim);
  const arrayAllDay = arrayAllLichChieuPhim.map((item) => {
    return item.ngayChieuGioChieu.slice(0, 10); // tạo mảng mới với item là "2020-12-17" cắt ra từ 2020-12-17T10:10:00
  });
  console.log(arrayAllDay);
  const mangNgayKhongTrungLap = [...new Set(arrayAllDay)];
  console.log("bbbb", mangNgayKhongTrungLap);
  const allArrayCumRapChieuFilterByDay = mangNgayKhongTrungLap.map((day) => {
    // tạo mảng chứa lichchieuphim filter theo ngày
    const arrayLichChieuPhimFilterByDay = arrayAllLichChieuPhim.filter(
      (item) => {
        if (item.ngayChieuGioChieu.slice(0, 10) === day) {
          return true;
        }
        return false;
      }
    );

    // loại bỏ cumRapChieu trùng lặp
    const arrayCumRapChieuRemoveDup = arrayLichChieuPhimFilterByDay?.filter(
      (itemIncrease, indexIncrease, arr) => {
        const indexFirstFounded = arr.findIndex(
          (t) => t.tenCumRap === itemIncrease.tenCumRap
        );
        return indexIncrease === indexFirstFounded;
      }
    );

    // tạo mảng cumRapChieu
    const arrayCumRapChieu = arrayCumRapChieuRemoveDup.map((cumRapChieu) => {
      const tenCumRap = cumRapChieu.tenCumRap;
      const maLichChieu = cumRapChieu.maLichChieu;
      // tạo mảng lichChieuPhim: trùng tenCumRap
      const lichChieuPhim = arrayLichChieuPhimFilterByDay.filter(
        (lichChieuPhim) => lichChieuPhim.tenCumRap === tenCumRap
      );
      return { tenCumRap, maLichChieu, lichChieuPhim };
    });

    return arrayCumRapChieu;
  });
  console.log(allArrayCumRapChieuFilterByDay);
  const handleSelectDay = (index) => {
    setindexSelected(index);
  };

  return (
    <div>
      <div className={classes.listDay}>
        {mangNgayKhongTrungLap?.map((day, index) => {
          return (
            <div
              className={classes.dayItem}
              key={day}
              style={{ color: index === indexSelected ? "#fb4226" : "#000" }}
              onClick={() => handleSelectDay(index)}
            >
              <p className={classes.text}>{formatDate(day).dayToday}</p>
              <p
                style={{
                  fontSize: index === indexSelected ? "18px" : "16px",
                  transition: "all .2s",
                  marginBottom: 0,
                }}
              >
                {formatDate(day).YyMmDd}
              </p>
            </div>
          );
        })}
      </div>
      <div className={classes.BotBonus}>
        {allArrayCumRapChieuFilterByDay?.map(
          (arrayCumRapChieuFilterByDay, index) => {
            return (
              <div
                key={index}
                style={{ display: indexSelected === index ? "block" : "none" }}
              >
                {arrayCumRapChieuFilterByDay.map((item, index2) => {
                  return (
                    <div className={classes.bot}>
                      <div key={index2} className={classes.info}>
                        <FakeImgTheater
                          nameTheater={item.tenCumRap}
                          imgStyled={classes.imgTheater}
                        />
                        <div>
                          <TenCumRap tenCumRap={item.tenCumRap} />
                          <AddressDetail maLichChieu={item.maLichChieu} />
                        </div>
                      </div>
                      {item.lichChieuPhim?.map((lstLichChieuPhim, index) => {
                        return (
                          <Fragment key={index}>
                            <BtnGoCheckOut
                              lichChieuTheoPhim={lstLichChieuPhim}
                            />
                          </Fragment>
                        );
                      })}
                    </div>
                  );
                })}
              </div>
            );
          }
        )}
      </div>
    </div>
  );
}

export default RightSelection;
