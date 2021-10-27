import { Grid } from "@material-ui/core";
import React from "react";
import useStyles from "./styles";
import _ from "lodash";
import { useSelector } from "react-redux";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
function Footer() {
  const { arrTheater } = useSelector((state) => state.TheaterReducer);
  const arrSystemTheater = _.map(arrTheater, (item) =>
    _.pick(item, ["maHeThongRap", "tenHeThongRap", "logo"])
  );
  console.log(arrSystemTheater);
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));
  const classes = useStyles({ isDesktop });
  return (
    <div className={classes.footer}>
      <div className={classes.root}>
        <Grid className={classes.displayInDesktop} container>
          <Grid item md={4} >
            <p className={classes.title}>TIX</p>
            <div className="d-flex">
              <div className={classes.text}>
                <ul>
                  <li>
                    <a href="https://tix.vn/faq">FAQ</a>
                  </li>
                  <li>
                    <a href="https://tix.vn/brand-guideline/">
                      Brand Guidelines
                    </a>
                  </li>
                </ul>
              </div>
              <div className={classes.text}>
                <ul>
                  <li>
                    <a
                      className="col-6 col-lg-12"
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://tix.vn/thoa-thuan-su-dung/"
                    >
                      Thỏa thuận sử dụng
                    </a>
                  </li>
                  <li>
                    <a
                      className="col-6 col-lg-12"
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://tix.vn/chinh-sach-bao-mat"
                    >
                      Chính sách bảo mật
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </Grid>
          <Grid item md={4}>
            <p className={classes.title}>ĐỐI TÁC</p>
            <div style={{ marginTop: 15 }}>
              <Grid container spacing={0} style={{ marginBottom: 15 }}>
                {arrSystemTheater.map((item, index) => {
                  return (
                    <Grid
                      item
                      xs={2}
                      md={2}
                      key={index}
                      className="text-center"
                    >
                      <img src={item.logo} style={{ width: 30 }} alt="" />
                    </Grid>
                  );
                })}
              </Grid>
              <Grid container spacing={0} style={{ marginBottom: 15 }}>
                {arrSystemTheater.map((item, index) => {
                  return (
                    <Grid
                      item
                      xs={2}
                      md={2}
                      key={index}
                      className="text-center"
                    >
                      <img src={item.logo} style={{ width: 30 }} alt="" />
                    </Grid>
                  );
                })}
              </Grid>
              <Grid container spacing={0} style={{ marginBottom: 15 }}>
                {arrSystemTheater.map((item, index) => {
                  return (
                    <Grid
                      item
                      xs={2}
                      md={2}
                      key={index}
                      className="text-center"
                    >
                      <img src={item.logo} style={{ width: 30 }} alt="" />
                    </Grid>
                  );
                })}
              </Grid>
              <Grid container spacing={0} style={{ marginBottom: 15 }}>
                {arrSystemTheater.map((item, index) => {
                  return (
                    <Grid
                      item
                      xs={2}
                      md={2}
                      key={index}
                      className="text-center"
                    >
                      <img src={item.logo} style={{ width: 30 }} alt="" />
                    </Grid>
                  );
                })}
              </Grid>
            </div>
          </Grid>
          <Grid item md={4}>
            <div style={{ textAlign: "center" }}>
              <Grid container>
                <Grid item md={6}>
                  <p className={classes.title}>MOBILE APP</p>
                  <a href="https://apps.apple.com/vn/app/tix-%C4%91%E1%BA%B7t-v%C3%A9-nhanh-nh%E1%BA%A5t/id615186197">
                    <img
                      src="https://tix.vn/app/assets/img/icons/apple-logo.png"
                      alt=""
                      className={classes.iconApp}
                    />
                  </a>
                  <a href="https://apps.apple.com/vn/app/tix-%C4%91%E1%BA%B7t-v%C3%A9-nhanh-nh%E1%BA%A5t/id615186197">
                    <img
                      src="https://tix.vn/app/assets/img/icons/android-logo.png"
                      alt=""
                      className={classes.iconApp}
                    />
                  </a>
                </Grid>
                <Grid item md={6}>
                  <p className={classes.title}>SOCIAL</p>
                  <a href="https://apps.apple.com/vn/app/tix-%C4%91%E1%BA%B7t-v%C3%A9-nhanh-nh%E1%BA%A5t/id615186197">
                    <img
                      src="https://tix.vn/app/assets/img/icons/facebook-logo.png"
                      alt=""
                      className={classes.iconApp}
                    />
                  </a>
                  <a href="https://apps.apple.com/vn/app/tix-%C4%91%E1%BA%B7t-v%C3%A9-nhanh-nh%E1%BA%A5t/id615186197">
                    <img
                      src="https://tix.vn/app/assets/img/icons/zalo-logo.png"
                      alt=""
                      className={classes.iconApp}
                    />
                  </a>
                </Grid>
              </Grid>
            </div>
          </Grid>
        </Grid>
        <hr className={classes.hrFooter} />
        <div className={`${classes.footer__down} container`}>
          <div className="row">
            <div className="col-12 col-md-1 p-1 text-center">
              <img
                src="https://tix.vn/app/assets/img/icons/zion-logo.jpg"
                alt="company"
                className={classes.logoCompany}
              />
            </div>
            <div className={`col-12 col-md-9 p-1 text-center text-lg-left`}>
              <p className={classes.titleDown}>
                TIX - SẢN PHẨM CỦA CÔNG TY CỔ PHẦN ZION
              </p>
              <p className="m-0">
                Địa chỉ: Z06 Đường số 13, Phường Tân Thuận Đông, Quận 7, Tp. Hồ
                Chí Minh, Việt Nam.
              </p>
              <span>Giấy chứng nhận đăng ký kinh doanh số: 0101659783,</span>
              <span>
                đăng ký thay đổi lần thứ 30, ngày 22 tháng 01 năm 2020 do Sở kế
                hoạch và đầu tư Thành phố Hồ Chí Minh cấp.
              </span>
              <span>Số Điện Thoại (Hotline): 1900 545 436</span>
              <p>
                Email: <span className="d-inline">support@tix.vn</span>
              </p>
            </div>
            <div
              className="col-12 col-md-2 p-1 text-center"
              style={{ position: "static" }}
            >
              <img
                src="https://s3img.vcdn.vn/123phim/2020/03/d1e6bd560daa9e20131ea8a0f62e87f8.png"
                alt="gvm"
                className={classes.gvm}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
