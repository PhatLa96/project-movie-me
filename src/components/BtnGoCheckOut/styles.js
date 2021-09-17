import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    button: {
        border: "1px solid #e4e4e4",
        margin: 5,
        fontSize: 12,
        fontWeight: 500,
        transition: "all .2s",
        backgroundColor: "rgba(246,246,246,.5)",
        color: "#9b9b9b",
        "&:hover": {
            color: "#fb4226",
            fontWeight:500,
            fontSize:14
        }
    },
    inTime: {
        fontSize: 14,
        fontWeight: 500,
        color: "#108f3e",
        paddingRight:4
    }
})
export default useStyles