import { makeStyles } from "@material-ui/core"
import { customScrollbarDetail } from "../../../Desktop/scrollbar";
import { underLineDetail } from "../../../underline"
const useStyles = makeStyles({
    listDay: {
        height: "90px",
        padding: "16px !important",
        paddingLeft: "0 !important",
        paddingRight: "0 !important",
        backgroundColor: "#fff",
        borderRadius: 10,

        alignItems: "center",
        display: "flex",

        overflowX: "scroll",
        overflowY: "hidden",
        whiteSpace: "nowrap",
        ...customScrollbarDetail
    },
    dayItem: {
        padding: 10,
        fontWeight: 500,
        textAlign: "center",
        cursor: "pointer",

    },
    text: {
        marginBottom: 0
    },
    imgTheater: {
        width: 50,
        height: 50,
        marginRight: 10
    },
    info: {
        display: "flex",
        padding: 15
    },
    bot: {
        paddingBottom: 15,

        ...underLineDetail
    },
    BotBonus: {
    
        overflowY: "auto",
     
    
        maxHeight: 623,
        maxWidth: "100%",
        ...customScrollbarDetail
    }
});
export default useStyles