import { Tab, Tabs } from "@material-ui/core";
import React from "react";
import RightSelection from "./RightSelection";
import useStyles from "./styles";

function LichChieuPhimDesktop({ arrDetail }) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        classes={{ root: classes.TabsLeft }}
      >
        {arrDetail?.heThongRapChieu?.map((theater) => (
          <Tab
            classes={{
              wrapper: classes.wrapper,
              root: classes.tabRoot,
              indicator: classes.indicator,
            }}
            disableRipple
            key={theater.maHeThongRap}
            label={
              <>
                <img
                  className={classes.logo}
                  src={theater.logo}
                  alt="logoTheater"
                />
                <span>{theater.tenHeThongRap}</span>
              </>
            }
          />
        ))}
      </Tabs>
      <div className={classes.right}>
        {arrDetail?.heThongRapChieu?.map((theater, index) => {
          return (
            <div style={{ display: value === index ? "block" : "none" }}>
              <RightSelection cumRapChieu={theater.cumRapChieu} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default LichChieuPhimDesktop;
