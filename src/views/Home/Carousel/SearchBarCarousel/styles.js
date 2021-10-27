import { makeStyles } from "@material-ui/core"
import { customScrollbar } from "../../Theater/customScrollbar"
const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
    maxWidth: 940,
    margin: "auto",
    height: 93,

    display: "flex",
    position: "absolute",
    bottom: "-22,5%",

    left: "50%",
    transform: "translate(-50%,-50%)",
    width: "100%",
    alignItems: "center",

    backgroundColor: "#fff",
    borderRadius: 5,
    boxShadow: '0 0 10px rgb(0 0 0 / 30%)',
    [theme.breakpoints.down(376)]: {
      display: props => props.isDesktop ? "block" : "none"
    }
  },
  itemFirst: {
    padding: '1%',
    flex: "30%",
    '&:after': { // dòng kẻ dọc mờ
      content: "''",
      position: "absolute",
      right: "0",
      height: "62%",
      top: "50%",
      transform: "translateY(-50%)",
      borderRight: "1px solid",
      borderRightColor: "rgba(238,238,238,.88)"
    },

  },

  textField: {
    '& > div': {
      marginTop: 0,
      paddingBottom: "0px !important",
      '& > input': {
        padding: "18px 0px !important",
        paddingLeft: "20px !important",

        fontSize: 14,
      },
      '&:before': {
        borderBottom: "none !important"
      },
      '&:after': {
        borderBottom: "none"
      },
      '& > div:hover:not(.Mui-disabled):before': {
        borderBottom: 'none',
      },
    },
    '& > label': {
      color: "#000",
      fontSize: 14,
      top: -3,
      left: 20,
      display: props => props.openPhim ? "none" : "block"
    },
    '& > label.Mui-focused': {
      display: "none"
    },
  },

  popupIndicator: {
    '& > span': {
      marginTop: 0,
      '& > svg': {
        color: "rgba(0, 0, 0, 0.3)",
        fontSize: "19px !important",
      },
    },

  },
  listbox: {
    ...customScrollbar,
    '& .MuiAutocomplete-option[aria-selected="true"]': {
      backgroundColor: "#fb422685",
      color: "#fff",
    }
  },
  paper: {
    boxShadow: "0px 5px 5px -3px rgb(0 0 0 / 20%), 0px 8px 10px 1px rgb(0 0 0 / 14%), 0px 3px 14px 2px rgb(0 0 0 / 12%)",
  },
  noOptions: {
    color: "#000",
    fontSize: 14,
    padding: "9.5px 20px 9.5px 20px",

  },
  menu: { maxHeight: 300, ...customScrollbar },
  menu__item: {
    width: '100%',
    minHeight: "auto",
    display: 'block',
    padding: '3px 20px',
    fontSize: '14px',
    color: '#333',
    '&:focus': {
      backgroundColor: 'transparent',
    },
    '& li ~ li': {
      fontSize: 11,
      color: '#aaa',
    },
    // màu nền và chữ khi hover
    '&:hover': {
      backgroundColor: "#fb4226",
      color: "#fff",
      '& li ~ li': {
        color: '#fff',
      }
    },
  },
  'menu__item--selected': {
    backgroundColor: "#fb422685 !important",
    color: "#fff",
    '& li ~ li': {
      color: '#fff',
    }
  },



  search__item: {
    color: 'black',
    padding: '1%',
    flex: "calc(70% / 4)",
    '& > div:before': {
      borderBottom: 'none',
    },
    '& > div:hover:not(.Mui-disabled):before': {
      borderBottom: 'none',
    },
    '& > div > div': {
      color: 'black',
      fontSize: 14,
      padding: '18px 0px',
      '&:focus': {
        backgroundColor: 'transparent'
      },
      '& ~ svg': {
        fontSize: 19,
        color: 'rgba(0, 0, 0, 0.3)',
        top: '33%',
      }
    },
    '&:after': {
      content: "''",
      position: "absolute",
      right: "0",
      height: "62%",
      top: "50%",
      transform: "translateY(-50%)",
      borderRight: "1px solid",
      borderRightColor: "rgba(238,238,238,.88)"
    }
  },
  menu__item: {
    "&:hover": {
      backgroundColor: "#fb4226"
    },

  },
  btn: { // css áp dụng khi disabled = false
    backgroundColor: '#fb4226',
    margin: 'auto',
    '&:hover': {
      backgroundColor: "#d01414",
    },
    '&:focus': {
      outline: "none",
    },
    "&$btn": {// css áp dụng khi disabled button
      color: '#fff',
      padding: "8px 23px",
    }
  },
  btnDisabled: {// css áp dụng khi disabled button
    backgroundColor: "#4a4a4a",
    border: "none",
    textTransform: "uppercase",
    borderRadius: "4px",
    padding: "8px 23px",
  }
}))
export default useStyles
