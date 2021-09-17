import { Tab, Tabs } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import Seperate from "../../../components/Seperate";
import useStyles from "../Theater/styles";
import ListCumRap from "./ListCumRap";
import { underLine } from "./underline";
function Theater() {
  const { arrTheater } = useSelector((state) => state.TheaterReducer);
  const [valueHeThongRap, setValueHeThongRap] = React.useState(0);
  const classes = useStyles({ underLine });

  return (
    <div>
      <Seperate />
      <div className={classes.theater}>
        <Tabs
          variant="scrollable"
          orientation="vertical"
          value={valueHeThongRap}
          classes={{ indicator: classes.tabs__indicator, root: classes.taps }}
        >
          {arrTheater?.map((theater, index) => {
            return (
              <Tab
                onClick={() => setValueHeThongRap(index)}
                disableRipple
                classes={{
                  root: classes.tap,
                  textColorInherit: classes.textColorInherit,
                }}
                key={theater.maHeThongRap}
                label={
                  <img
                    style={{ width: "50px", height: "50px" }}
                    src={theater.logo}
                    alt="theaterLogo"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://picsum.photos/50/50";
                    }}
                  />
                }
              />
            );
          })}
        </Tabs>
        {arrTheater?.map((theater, index2) => {
          return (
            <div className={classes.cumRap} hidden={valueHeThongRap !== index2}>
              {/* // ẩn những gì có valueHeThongRap không bằng index2,hiện những gì bằng index 2 */}
              <ListCumRap key={index2} lstCumRap={theater.lstCumRap} />
            </div>
          );
        })}
      </div>
      <Seperate />
    </div>
  );
}

export default Theater;
