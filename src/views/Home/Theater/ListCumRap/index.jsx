import { Tabs } from "@material-ui/core";
import React, { memo, useState } from "react";
import useStyles from "./styles";
import { underLine } from "../underline";
import TenCumRap from "../../../../components/TenCumRap";
import ListPhim from "./ListPhim.jsx";
import { customScrollbar } from "../customScrollbar";
function ListCumRap({ lstCumRap }) {
  const classes = useStyles({ underLine, customScrollbar });
  const [valueCumRap, setValueCumRap] = useState(0);
  const handleChangeCumRap = (e) => {
    setValueCumRap(Number(e.currentTarget.getAttribute("index")));
  };

  return (
    <div className={classes.flexCumRap}>
      <div className={classes.listCumRap}>
        {lstCumRap?.map((cumRap, index) => {
          return (
            <div
              index={index}
              onClick={(e) => handleChangeCumRap(e)}
              key={cumRap.maCumRap}
              style={{
                opacity: valueCumRap === index ? "1" : ".5",
                display: "flex",
              }}
              className={classes.cumRap}
            >
              <img
                style={{ width: 50, height: 50 }}
                src={cumRap.hinhAnh}
                alt=""
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://picsum.photos/50/50";
                }}
              />
              <div className={classes.cumRap__info}>
                <TenCumRap tenCumRap={cumRap.tenCumRap} />
                <p className={classes.cumRap__address}>{cumRap.diaChi}</p>
              </div>
            </div>
          );
        })}
      </div>
      {lstCumRap.map((cumRap, index) => (
        <ListPhim
          lstPhim={cumRap.danhSachPhim}
          key={cumRap.maCumRap}
          hidden={valueCumRap !== index}
        />
      ))}
    </div>
  );
}

export default memo(ListCumRap);
