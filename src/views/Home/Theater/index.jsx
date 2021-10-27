import { Tab, Tabs } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import React from "react";
import { useSelector } from "react-redux";
import Seperate from "../../../components/Seperate";
import { colorTheater } from "../../../util/settings/theaterData";
import useStyles from "../Theater/styles";
import ListCumRap from "./ListCumRap";
import { underLine } from "./underline";
import MobileLstCumRap from "./MobileListTheater/index";
function Theater() {
  const { arrTheater } = useSelector((state) => state.TheaterReducer);
  const [valueHeThongRap, setValueHeThongRap] = React.useState(0);
  const classes = useStyles({ underLine });
  const theme = useTheme();
  const isMobileTheater = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <div id="cumrap">
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
        {arrTheater.map((theater, index2) => (
          <div
            hidden={valueHeThongRap !== index2}
            key={theater.maHeThongRap}
            className={classes.cumRap}
          >
            {isMobileTheater ? (
              <MobileLstCumRap lstCumRap={theater.lstCumRap} />
            ) : (
              <ListCumRap
                lstCumRap={theater.lstCumRap}
                color={
                  colorTheater[
                    theater.lstCumRap[0].tenCumRap.slice(0, 3).toUpperCase()
                  ]
                }
                maHeThongRap={theater.maHeThongRap}
              />
            )}
          </div>
        ))}
      </div>
      <Seperate />
    </div>
  );
}

export default Theater;
