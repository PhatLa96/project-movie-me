import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 940,
        margin: "auto"
    },
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
    appbar: {
        backgroundColor: "transparent",
        color: "#000",
        textAlign: "center",
        boxShadow: "none",
        "& .PrivateTabIndicator-colorSecondary-31": {
            backgroundColor: "transparent"
        }
    },
    tabButton: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        "& > span": {
            transition: "all 0.2s",
            "&:hover": {
                fontSize: 16
            }
        }
    },
    tabSelected: {
        color: "#fa5238"
    },
    news: {
        color: "#000",
        "&:hover": {
            textDecoration: "none",
            color: "#000"
        },
        '& div': {
            '& h4': {
                fontSize: '17px',
                fontWeight: 'bold'
            },
            '& p': {
                fontSize: '13px'
            }
        },
    },
    newMinium: {
        color: 'black',
        '&:hover': {
            color: 'black',
            textDecoration: 'none',
        },

    },
    img: {
        width: "100%",
        borderRadius: 5
    }
}));
export default useStyles