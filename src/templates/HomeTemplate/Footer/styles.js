import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    root: {
        maxWidth: 940,
        margin: "auto",

    },
    footer: {
        backgroundColor: "#222",
        paddingTop: "20px",
        paddingBottom: "20px",
        color: "#949494",

    },
    title: {
        padding: 0,
        marginBottom: 15,
        fontSize: "80%",
        color: "#fff"

    },
    displayInDesktop: {
        display: props => props.isDesktop ? "block" : "none"
    },
    text: {
        width: "45%",


        "& ul": {
            listStyle: "none",
            padding: 0,
            textDecoration: "none",
            "& li": {
                "& a": {
                    textDecoration: "none",
                    color: "#949494",
                    fontSize: 12,
                    display: "block",
                    fontWeight: 700,
                    whiteSpace: "nowrap",
                    transition: "all .2s",
                    lineHeight: 2.3,
                    "&:hover": {
                        color: "#fff"
                    }
                }
            }
        }
    },
    iconApp: {
        height: 30,
        width: 30,
        margin: 5,

    },
    hrFooter: {
        borderTop: "1px solid #4a4a4a",

    },
    logoCompany: {
        width: 80,
        borderRadius: 8,
        [theme.breakpoints.up("lg")]: {
            width: "100%",
        },
    },
    gvm: {
        width: 130,
        [theme.breakpoints.up("lg")]: {
            width: "100%",
        },
    },
    titleDown: {
        padding: 0,
        marginBottom: 0,
        fontSize: "80%",
        color: "#fff"

    },
    footer__down: {
        [theme.breakpoints.down(376)]: {
            padding: "15px 30px"
        }

    }

}))

export default useStyles