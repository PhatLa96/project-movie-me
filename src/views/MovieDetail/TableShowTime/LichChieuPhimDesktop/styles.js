import { makeStyles } from "@material-ui/core";
import { underLineDetail } from "../../underline";
const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        minHeight: 713,
        borderRadius: 10,
        display: 'flex',


    },
    logo: {
        width: 50,
        height: 50,
        marginRight: 15
    },
    wrapper: {
        flexDirection: "row",
        justifyContent: "flex-start"
    },
    tabRoot: {
        padding: 20,
        fontSize: 12,
        opacity: .3,
        "&:hover": {
            opacity: 1,
        },
        transition: "all .2s",
        ...underLineDetail
    },
    TabsLeft: {
        borderRight: `1px solid ${theme.palette.divider}`,
        width: "28%",
        minHeight: "100%"
    },
    indicator: {
        backgroundColor: "transparent",
    },
    right: {
        width: "72%",
    }
}))
export default useStyles