import {
  Avatar,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import MenuIcon from "@material-ui/icons/Menu";
import clsx from "clsx";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router";
import { scroller } from "react-scroll";
import createAction from "../../../redux/actions";
import { GetCarouselAction } from "../../../redux/actions/ManagerMovieAction/CarouseActionl";
import { GetMovieListAction } from "../../../redux/actions/ManagerMovieAction/MovieAction";
import { GetTheaterList } from "../../../redux/actions/ManagerTheaterAction/TheaterAction";
import { LazyType } from "../../../redux/types/ManagerLazyType";
import { userType } from "../../../redux/types/ManagerUserType";
import { useTheme } from "@material-ui/core/styles";
import useStyles from "./style";
import UseHandleVibrateLazy from "../../../util/UseHandleVibrateLazy";
const headMenu = [
  { nameLink: "Lịch chiếu", id: "lichchieu" },
  { nameLink: "Cụm rạp", id: "cumrap" },
  { nameLink: "Tin tức", id: "tintuc" },
  { nameLink: "Ứng dụng", id: "ungdung" },
];

export default function Header() {
  const { Users } = useSelector((state) => state.ManagerUserReducer);
  const { isLoadingBackToHome } = useSelector((state) => state.LazyReducer);
  const [openDrawer, setOpenDrawer] = useState(false);
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const isLazy = UseHandleVibrateLazy();
  const dispatch = useDispatch();
  console.log("user", Users);
  let location = useLocation();
  const classes = useStyles({ isDesktop, openDrawer });
  const history = useHistory();
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  // nếu đang mở drawer mà chuyển sang màn hình lớn thì phải tự đóng lại
  useEffect(() => {
    if (isDesktop) {
      if (openDrawer) {
        setOpenDrawer(false);
      }
    }
  }, [isDesktop]);
  const handleRegister = () => {
    history.push("/dangky", location.pathname); // truyền kèm location.pathname để đăng nhập xong quay lại để location.state không bị undefined
  };
  const handleLogin = () => {
    history.push("/dangnhap", location.pathname);
  };
  const handleClickLogo = () => {
    if (location.pathname === "/") {
      dispatch(GetMovieListAction);
      dispatch(GetCarouselAction);
      dispatch(GetTheaterList);
      return;
    }
    dispatch(createAction(LazyType.LOADING_BACKTO_HOME));
    history.push("/", "");
  };
  const handleClickClick = (id) => {
    setOpenDrawer(false);
    if (location.pathname === "/") {
      scroller.scrollTo(id, {
        duration: 800,
        smooth: "easeInOutQuart",
      });
    } else {
      dispatch(createAction(LazyType.LOADING_BACKTO_HOME));
      setTimeout(() => {
        history.push("/", id);
      }, 50);
    }
  };
  useEffect(() => {
    if (!isLoadingBackToHome) {
      setTimeout(() => {
        scroller.scrollTo(location.state, {
          duration: 800,
          smooth: "easeInOutQuart",
        });
      }, 500);
      // return () => {
      //   // history.replace("", null);
      // };
    }
  }, [isLoadingBackToHome, location]);
  console.log("location", location);
  const handleLogout = () => {
    setOpenDrawer(false);
    dispatch(createAction(userType.LOG_OUT));
  };
  useEffect(() => {
    if (!isLazy && location.state === undefined) {
      window.scrollTo(0, 0);
    }
  }, [isLazy]);
  const handleDrawerOpen = () => {
    setOpenDrawer(true);
  };
  const handleDrawerClose = () => {
    setOpenDrawer(false);
  };
  return (
    <div className={classes.root} id="header">
      <AppBar className={classes.appBar} position="fixed">
        <Toolbar className={classes.spaceBetween}>
          <div onClick={handleClickLogo}>
            <img
              src="https://tix.vn/app/assets/img/icons/web-logo.png"
              alt="logo"
              className={classes.logo}
            />
          </div>
          <div className={classes.linkTobody}>
            {headMenu.map((link, index) => {
              return (
                <span
                  onClick={() => handleClickClick(link.id)}
                  className={classes.link}
                  key={index}
                >
                  {link.nameLink}
                </span>
              );
            })}
          </div>
          <div className={classes.user}>
            {Users ? (
              <List disablePadding className={classes.auth}>
                <ListItem
                  button
                  classes={{ root: clsx(classes.itemAuth, classes.divide) }}
                  // onClick={handleUser}
                >
                  <ListItemIcon classes={{ root: classes.icon }}>
                    <Avatar
                      alt="avatar"
                      className={classes.avatar}
                      // src={FAKE_AVATAR}
                    />
                  </ListItemIcon>
                  <ListItemText primary={Users?.hoTen} />
                </ListItem>
                <ListItem
                  button
                  classes={{ root: classes.itemAuth }}
                  onClick={handleLogout}
                >
                  <ListItemText primary="Đăng Xuất" />
                </ListItem>
              </List>
            ) : (
              <List className={classes.list} disablePadding>
                <ListItem
                  classes={{ root: clsx(classes.listItem, classes.divide) }}
                  button
                  onClick={handleLogin}
                >
                  <ListItemIcon>
                    <Avatar />
                  </ListItemIcon>
                  <ListItemText primary="Đăng nhập" />
                </ListItem>
                <ListItem button onClick={handleRegister}>
                  <ListItemText primary="Đăng ký" />
                </ListItem>
              </List>
            )}
          </div>
          <div className={classes.menuIcon}>
            <IconButton
              color="default"
              edge="end"
              onClick={handleDrawerOpen}
              classes={{ root: classes.listItem }}
            >
              <MenuIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        anchor="right"
        onClose={handleDrawerClose}
        open={openDrawer}
        classes={{
          paper: classes.drawerPaper,
        }}
        transitionDuration={300}
      >
        {" "}
        <div className={classes.drawerHeader}>
          {Users ? (
            <ListItem
              button
              classes={{
                root: clsx(classes.itemAuth, classes.divide, classes.hover),
              }}
            >
              <ListItemIcon classes={{ root: classes.icon }}>
                <Avatar alt="avatar" className={classes.avatar} />
              </ListItemIcon>
              <ListItemText
                className={classes.username}
                primary={Users?.hoTen}
              />
            </ListItem>
          ) : (
            <ListItem
              button
              classes={{ root: classes.listItem }}
              onClick={handleLogin}
            >
              <ListItemIcon classes={{ root: classes.icon }}>
                <AccountCircleIcon fontSize="large" />
              </ListItemIcon>
              <span className={classes.link} style={{ fontWeight: 500 }}>
                Đăng Nhập
              </span>
            </ListItem>
          )}
          <IconButton
            classes={{ root: classes.listItem }}
            onClick={handleDrawerClose}
          >
            <ChevronRightIcon />
          </IconButton>
        </div>
        <List>
          {headMenu.map((link) => (
            <span
              key={link.id}
              className={classes.itemMenu}
              onClick={() => handleClickClick(link.id)}
            >
              {link.nameLink}
            </span>
          ))}

          {Users ? (
            <span className={classes.itemMenu} onClick={handleLogout}>
              Đăng Xuất
            </span>
          ) : (
            <span className={classes.itemMenu} onClick={handleRegister}>
              Đăng Ký
            </span>
          )}
        </List>
      </Drawer>
    </div>
  );
}
