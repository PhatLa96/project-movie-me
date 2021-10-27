import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    root: {
        padding: "0 10%",
        position: "relative",
        marginLeft: "10%",
        color: "#9b9b9b"
    },
    InfoCountDown: {
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        padding: "15px 0"
    },
    InfoTheater: {
        display: "flex"
    },
    InfoTheaterText: {
        marginLeft: 12,
        "& p": {
            marginBottom: 0,
            fontSize: "14px"
        }
    },
    CountDown: {
        textAlign: "center",
        "& p": {
            marginBottom: 0,
            fontSize: "12px"
        }
    },
    Seat: {
        position: "relative",
        display: "inline-block",
        width: 'calc(100%/16)',
        cursor: "pointer"
    },
    label: {
        fontSize: 20,
        position: "absolute",
        top: "50%",
        left: "-100%",
        transform: "translate(-50%,-50%)",
        fontWeight: 500,
        color: "#000"
    },
    SeatSection: {
        padding: "0 10%",
        textAlign: "center"
    },
    seatIcon: {
        width: "100%",
        height: "100%"
    },
    fontSeat: {
        fontSize: "3.5rem"
    },
    SeatDisable: {
        position: "absolute",
        top: "42%",
        left: "50%",
        width: "40%",
        transform: "translate(-50%,-50%)"
    },
    SeatCenter: {
        position: "absolute",
        top: "-50%",
        left: "-50%",
        width: "700%",


        transform: "translate(0%,0%)",
        zIndex: 1,
    },
    areaClick: {
        width: '100%',
        height: '100%',
        color: 'red',
        position: 'absolute',
        zIndex: 2,
        top: 0,
        left: 0,
    },
    SelectedNumber: {
        position: "absolute",
        top: "38%",
        left: "50%",

        transform: "translate(-50%,-50%)",
        color: "#000",
        fontSize: 20,
        fontWeight: 500
    },
    infoSeat: {
        padding: '2% 10% 0',
        fontSize: 13,
        color: '#9b9b9b'
    },
    infoSeatItem: {
        display: 'flex',
        justifyContent: 'space-evenly',
        textAlign: 'center',
        gap: "2px",

    },
    PositionX: {
        position: "absolute",
        top: "20%",
        left: "50%",
        width: "10%",
        transform: "translate(-50%,-50%)"
    },
    infoView: {
        display: 'flex',
        justifyContent: 'space-evenly',
        textAlign: 'center',
        gap: "2px",
        marginTop: 15
    },
    linecenter: {
        display: "inline-block",
        borderBottom: "2px dashed #fa7f6c",
        width: 28,
        verticalAlign: "super",
        marginRight: 8,
    },
    linebeautiful: {
        display: "inline-block",
        borderBottom: "2px solid #fa7f6c",
        width: 28,
        verticalAlign: "super",
        marginRight: 8,
    },
    bgleft: props => ({

        left: 0,
        top: 100,
        height: "calc(100% - 100px)",
        width: "7.5%",
        position: "fixed",
        backgroundImage: `url(${props.bgLeft})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
    }),
    opacity: {
        height: '100%',
        width: '100%',
        background: "#000",
        opacity: 0.7
    }
}))



export default useStyles