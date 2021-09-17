import {
  AppBar,
  Box,
  Button,
  CircularProgress,
  Fade,
  Grid,
  Tab,
  Tabs,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import LichChieuPhimDesktop from "./LichChieuPhimDesktop";
import useStyles from "./styles";
import Scroll from "../../../util/scroll";
import { scroller } from "react-scroll";
import { useDispatch, useSelector } from "react-redux";
import { GetComment } from "../../../redux/actions/ManagerCommentAction/ManagerCommentAction";
import { useParams } from "react-router";
import { Rating } from "@material-ui/lab";
import moment from "moment";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
function TabPanel(props) {
  const { isMobile, children, value, index, ...other } = props;
  return (
    <div hidden={value !== index} {...other}>
      <Box p={isMobile && index === 0 ? 0 : 3}>{children}</Box>
    </div>
  );
}

function TableShowTime({ onClickBtnMuaVe, arrDetail }) {
  const param = useParams(); // mã phim lấy từ url trên trình duyệt

  const [value, setValue] = useState(0);
  const [croll, setCroll] = useState(0);
  const [openComment, setOpenComment] = useState(false);
  const { commentList } = useSelector((state) => state.CommentReducer);
  const [commentListDisplay, setCommentListDislay] = useState({
    comment: [],
    page: 5,
    hideBtn: false,
    idScrollTo: "",
  });
  const classes = useStyles({ hideBtn: commentListDisplay.hideBtn });
  // const [dataComment,SetDataComment] = useState({
  //   avtId: currentUser?.taiKhoan,
  //   username: currentUser?.hoTen,
  //   point: 2.5,
  //   post: "",
  //   likes: 0,
  //   maPhim: param.maPhim,
  //   dataTest: false,
  //   createdAt: "",
  //   userLikeThisComment: [],
  // })
  console.log("123", commentList);
  const dispatch = useDispatch();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  useEffect(() => {
    const comment = commentList.slice(0, commentListDisplay.page);
    setCommentListDislay((arrDetail) => ({ ...arrDetail, comment }));
  }, [commentList]);
  useEffect(() => {
    if (commentListDisplay.idScrollTo) {
      scroller.scrollTo(commentListDisplay.idScrollTo, {
        duration: 800,
        offset: -79,
        smooth: "easeInOutQuart",
      });
    }
  }, [commentListDisplay.idScrollTo]);
  const setopenMore = () => {
    let hideBtn = false;
    let addComment = commentList.length % 5;
    if (commentList.length % 5 === 0) {
      addComment = 5;
    }
    if (commentListDisplay.page + addComment === commentList.length) {
      hideBtn = true;
    }
    const idScrollTo = `idComment${
      commentList[commentListDisplay.page].createdAt
    }`;
    const page = commentListDisplay.page + 5;
    const comment = commentList.slice(0, page);
    setCommentListDislay((arrDetail) => ({
      ...arrDetail,
      comment,
      page,
      hideBtn,
      idScrollTo,
    }));
  };
  const handleClose = () => {
    setOpenComment(false);
  };
  // khi nhấn btnMuaVe onClickBtnMuaVe là 1 số bất kỳ rơi vào if sẽ chạy hàm Scroll
  useEffect(() => {
    window.scrollTo(0, 0);
    setValue(() => 0);
    setCroll(() => onClickBtnMuaVe);
  }, [onClickBtnMuaVe]); // và khi onClickBtnMuaVe thay đổi sẽ chạy hàm useEffect chạy setValue = 0 sẽ chạy tới TabPanel lịch chiếu
  useEffect(() => {
    if (onClickBtnMuaVe !== 0) {
      Scroll("TapMovieDetail");
    }
  }, [croll]);

  useEffect(() => {
    dispatch(GetComment());
  }, []);
  return (
    <div className={classes.root} id="TapMovieDetail">
      <AppBar className={classes.appbar} position="static">
        <Tabs centered value={value} onChange={handleChange}>
          <Tab
            label="Lịch Chiếu"
            classes={{
              root: classes.tabButton,
              selected: classes.tabSelected,
            }}
          />
          <Tab
            label="Thông Tin"
            classes={{
              root: classes.tabButton,
              selected: classes.tabSelected,
            }}
          />
          <Tab
            label="Đánh Giá"
            classes={{
              root: classes.tabButton,
              selected: classes.tabSelected,
            }}
          />
        </Tabs>
      </AppBar>
      <Fade timeout={400} in={value === 0}>
        <TabPanel value={value} index={0}>
          <LichChieuPhimDesktop arrDetail={arrDetail} />
        </TabPanel>
      </Fade>
      <Fade timeout={400} in={value === 1}>
        <TabPanel value={value} index={1}>
          <div className="text-white">
            <h4>Nội dung</h4>
            <p>{arrDetail.moTa}</p>
          </div>
        </TabPanel>
      </Fade>
      <Fade timeout={400} in={value === 2}>
        <TabPanel value={value} index={2}>
          <div className={classes.danhGia}>
            <div className={classes.inputRoot}>
              <span className={classes.avatarReviewer}>
                <img
                  src="https://picsum.photos/50/50"
                  alt="avatar"
                  className={classes.avatarImg}
                />
              </span>
              <input
                className={classes.inputReviwer}
                type="text"
                placeholder="Bạn nghĩ gì về phim này?"
                readOnly="readonly"
              />

              <span className={classes.imgReviewerStar}>
                <Rating value={5} size="medium" readOnly />
              </span>
            </div>
          </div>
          <div
            className="text-center mb-2 text-white"
            // hidden={!loadingPostComment && !loadingLikeComment}
          >
            {/* <CircularProgress size={20} color="inherit" /> */}
          </div>
          {commentListDisplay?.comment?.map((item) => (
            <div
              key={`${item.createdAt}`}
              className={classes.itemDis}
              id={`idComment${item.createdAt}`}
            >
              <div className={classes.infoUser}>
                <div className={classes.left}>
                  <span className={classes.avatar}>
                    <img
                      src={`https://i.pravatar.cc/150?u=${item.avtId}`}
                      alt="avatar"
                      className={classes.avatarImg}
                    />
                  </span>
                  <span className={classes.liveUser}>
                    <p className={classes.userName}>{item.username}</p>
                    <p className={classes.timePost}>
                      {moment(item.createdAt).fromNow()}
                    </p>
                  </span>
                </div>
                <div className={classes.right}>
                  <p className="text-success">{item.point}</p>
                  <Rating
                    value={(item.point * 5) / 10}
                    precision={0.5}
                    size="medium"
                    readOnly
                  />
                </div>
                <div className="clearfix"></div>
              </div>
              <div className="py-3 mb-3 border-bottom">
                <p className="text-break">{item.post}</p>
              </div>
              <span
                className="d-inline-block"
                style={{ cursor: "pointer" }}
                // onClick={() => handleLike(item.id)}
              >
                <span className="mr-2">
                  {((userLikeThisComment) => {
                    return (
                      <ThumbUpIcon
                        style={{
                          color: "#fb4226",
                        }}
                      />
                    );
                  })(item.userLikeThisComment)}
                </span>
                <span style={{ color: "#737576" }}>
                  <span>{item.likes}</span> Thích
                </span>
              </span>
            </div>
          ))}
          <div className={classes.moreMovie}>
            <Button
              variant="outlined"
              onClick={() => setopenMore()}
              className={classes.moreMovieButton}
            >
              XEM THÊM
            </Button>
          </div>
        </TabPanel>
      </Fade>
    </div>
  );
}

export default TableShowTime;
