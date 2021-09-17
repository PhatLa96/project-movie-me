import { makeStyles } from "@material-ui/core"
import { transform } from "lodash"

const useStyles = makeStyles(theme => ({
    desktop: {
        // color: "#e9e9e9",
        backgroundColor: "rgb(10, 32, 41)",
    },
    top: {
        position: "relative",
        height: "41vw",
        width: "100%"
    },
    before: {
        position: "absolute",
        background: "linear-gradient(to top, rgb(10, 32, 41), transparent 100%)",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
    },
    bannerImage: {
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundImage: props => `url(${props.bannerImg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        filter: "blur(15px)",
        margin: "-11px 0 -5px -10px",
        width: "calc(100% + 5px)"
    },
    topInfo: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
        width: "100%",
        height: 320,
        maxWidth: 870,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#e9e9e9",
    },
    btnTrailer: {
        position: "absolute",
        left: "15%",
        top: "50%",
        opacity: 0
    },
    imgTrailer: {
        cursor: "pointer",
        '&:hover > div ': { opacity: 1 },
    },
    showInfo: {
        width: "59%",
        padding: "0px 15px"
    },
    movieName: {
        fontSize: 24
    },
    c18: {
        marginRight: "6px",
        verticalAlign: "13%",
        backgroundColor: "#fb4226",
        color: "#fff",
        fontSize: "16px",
        borderRadius: "4px",
        padding: "0 5px",
        display: "inline-block",
        textAlign: "center",
        minWidth: "33px"
    },
    btnMuaVe: {
        fontSize: "16px",
        borderRadius: "4px",
        background: "0 0",
        padding: "11px 25px",
        transition: "all .2s",
        marginTop: "25px",
        marginBottom: "20px",
        backgroundColor: "#fb4226",
        border: "none",
        color: "#fff",
        "&:hover": {
            backgroundColor: "#b42a14",
        }
    },
    rating: {
        width: "16%",
        height: "100%",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",

    },
    circular: {
        position: "relative",
        width: 120,
        height: 120
    },
    danhGia: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
        fontSize: 50
    },
    fabProgress: {
        color: "#7ed321",
        position: 'absolute',
        top: 0,
        left: 0,
    },
    behined: {
        color: "#829869",
        position: 'absolute',
        top: 0,
        left: 0,
    },
    rateStar: {

    },


}))
export default useStyles