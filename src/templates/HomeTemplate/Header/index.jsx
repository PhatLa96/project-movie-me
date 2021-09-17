import {
  Avatar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import React from "react";
import clsx from "clsx";
import { useHistory } from "react-router";
const headMenu = [
  { nameLink: "Lịch chiếu", id: "lichchieu" },
  { nameLink: "Cụm rạp", id: "cumrap" },
  { nameLink: "Tin tức", id: "tintuc" },
  { nameLink: "Ứng dụng", id: "ungdung" },
];
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  spaceBetween: {
    justifyContent: "space-between",
  },
  appBar: {
    backgroundColor: "rgba(255,255,255,.95)",
  },
  logo: {
    height: 50,
    width: 50,
    cursor: "pointer",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  link: {
    cursor: "pointer",
    paddingInline: "10px",
    "&:hover": {
      color: "#fb4226",
      transition: "all .2s",
    },
  },
  menuLink: {
    position: "absolute",
    color: "#000",

    left: "38%",
  },
  list: {
    display: "flex",
    color: "#9b9b9b",
  },
  listItem: {
    minWidth: "fit-content",
  },
  divide: {
    fontWeight: 500,
    "&::after": {
      content: "''",
      position: "absolute",
      right: "0",
      height: "30px",
      top: "50%",
      transform: "translateY(-50%)",
      borderRight: "1px solid #e9e9e9",
    },
  },
}));

export default function Header() {
  const classes = useStyles();
  const history = useHistory();
  const handleRegister = () => {
    history.push("/dangky");
  };
  const handleLogin = () => {
    history.push("/dangnhap");
  };
  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="static">
        <Toolbar className={classes.spaceBetween}>
          <div>
            <img
              src="https://tix.vn/app/assets/img/icons/web-logo.png"
              alt="logo"
              className={classes.logo}
            />
          </div>
          <div className={classes.menuLink}>
            {headMenu.map((link, index) => {
              return (
                <span className={classes.link} key={index}>
                  {link.nameLink}
                </span>
              );
            })}
          </div>
          <div>
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
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
