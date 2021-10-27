import { Grid } from "@material-ui/core";
import React from "react";
import Slider from "react-slick";
import useStyles from "./styles";

export default function HomeApp() {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  const textDecoration = { textDecoration: "underline" };
  const classes = useStyles();

  return (
    <div id="ungdung">
      <div className={classes.mobileApp}>
        <div className={classes.mainMaxWidth}>
          <Grid container>
            <Grid item lg={6} sm={12}>
              <div
                className={`${classes.mobileApp__left} text-center text-lg-left`}
              >
                <div>
                  <p className={classes.textLeft}>Ứng dụng tiện lợi dành cho</p>
                  <p className={classes.textLeft}>người yêu điện ảnh</p>
                  <br />
                  <p>
                    Không chỉ đặt vé, bạn còn có thể bình luận phim, chấm điểm
                    rạp và đổi quà hấp dẫn.
                  </p>
                  <br />
                  <a
                    className={classes.button}
                    href="https://itunes.apple.com/us/app/123phim-mua-ve-lien-tay-chon/id615186197?mt=8"
                    rel="noopener noreferrer"
                  >
                    App miễn phí - Tải về ngay!
                  </a>
                  <br />
                  <p className="py-3">
                    Tix có hai phiên bản{" "}
                    <span>
                      <a
                        href="https://itunes.apple.com/us/app/123phim-mua-ve-lien-tay-chon/id615186197?mt=8"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={textDecoration}
                      >
                        IOS
                      </a>
                    </span>{" "}
                    và{" "}
                    <span>
                      <a
                        style={textDecoration}
                        href="https://play.google.com/store/apps/details?id=vn.com.vng.phim123"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Android
                      </a>
                    </span>
                  </p>
                </div>
              </div>
            </Grid>
            <Grid item lg={6} sm={12}>
              <div className={classes.mobileApp__right}>
                <img
                  className={classes.bgmobile}
                  src="/img/mobile/mobile.png"
                  alt="mobile"
                />
                <Slider {...settings} className={classes["slick-mobile"]}>
                  <div>
                    <img src="./img/mobile/slide1.jpg" alt="" />
                  </div>
                  <div>
                    <img src="./img/mobile/slide2.jpg" alt="" />
                  </div>
                  <div>
                    <img src="./img/mobile/slide3.jpg" alt="" />
                  </div>
                  <div>
                    <img src="./img/mobile/slide4.jpg" alt="" />
                  </div>
                  <div>
                    <img src="./img/mobile/slide5.jpg" alt="" />
                  </div>
                  <div>
                    <img src="./img/mobile/slide6.jpg" alt="" />
                  </div>
                  <div>
                    <img src="./img/mobile/slide7.jpg" alt="" />
                  </div>
                  <div>
                    <img src="./img/mobile/slide8.jpg" alt="" />
                  </div>
                  <div>
                    <img src="./img/mobile/slide9.jpg" alt="" />
                  </div>
                  <div>
                    <img src="./img/mobile/slide10.jpg" alt="" />
                  </div>
                  <div>
                    <img src="./img/mobile/slide11.jpg" alt="" />
                  </div>
                  <div>
                    <img src="./img/mobile/slide12.jpg" alt="" />
                  </div>
                  <div>
                    <img src="./img/mobile/slide13.jpg" alt="" />
                  </div>
                  <div>
                    <img src="./img/mobile/slide14.jpg" alt="" />
                  </div>
                  <div>
                    <img src="./img/mobile/slide15.jpg" alt="" />
                  </div>
                  <div>
                    <img src="./img/mobile/slide16.jpg" alt="" />
                  </div>
                </Slider>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
}
