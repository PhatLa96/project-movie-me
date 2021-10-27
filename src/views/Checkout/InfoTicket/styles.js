import { makeStyles } from "@material-ui/core";
import { underLineTicket } from "./underLineTicket";
const useStyles = makeStyles(theme => ({
    infoTicket: {
        width: "100%",
        height: "120vh",
        padding: "0 8%",
        boxShadow: "0 0 15px rgb(0 0 0 / 30%)",
        backgroundColor: "#fff",
        display: "flex",
        justifyContent: 'space-between',
        flexDirection: "column",

    },
    TicketItem: {
        padding: "12px 0",
        position: "relative",
        ...underLineTicket,
        "& p": {
            marginBottom: 0
        }
    },
    Amount: {
        lineHeight: '60px',
        textAlign: 'center',
        fontSize: "41px",
        color: "#44c020",
        fontWeight: 500,
    },
    tenPhim: {
        fontWeight: 500,
        textTransform: 'capitalize',
    },
    seatInfo: {
        display: 'flex',
        justifyContent: "space-between",
        gap: '10%',
        color: "#fb4226",
        fontSize: 18,
        width: "100%"
    },
    amountLittle: {
        flex: "0 0 82px",
        color: "#44c020",
        fontWeight: 500,
        textAlign: 'right',
    },
    titleInfo: {
        fontSize: 16,
        color: "#9b9b9b"
    },
    fillIn: {
        border: 'none',
        width: "100%",
        lineHeight: 1.7,
        '&:focus': {
            outline: 'none'
        },
    },
    formPayment: props => ({
        display: props.isSelectedSeat ? "block " : "none",

    }),
    img: {
        borderRadius: "5px",
        marginLeft: "15px",
        marginRight: "15px",
        maxWidth: "40px",
    },

    toggleNotice: props => ({
        color: "rgb(251, 79, 53)",
        display: props.isReadyPayment ? "none" : "block",
        paddingBottom: 20
    }),
    btnDiscount: {
        backgroundColor: "#afafaf",
        color: '#fff',
        border: 'none',
        borderRadius: "6px",
        padding: "5px 7px",
        position: 'absolute',
        top: "50%",
        right: '0%',
        transform: "translateY(-50%)",
    },
    bottomSection: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
    },
    btnDatVe: props => ({
        position: 'fixed',
        bottom: 0,
        right: 0,
        width: '25%',
        border: 'none',
        cursor: 'pointer',
        height: 60,
        backgroundColor: '#afafaf',
        backgroundImage: props.isReadyPayment ? "linear-gradient(223deg,#b4ec51 0,#429321 100%)" : 'none',
    }),
    txtDatVe: {
        margin: "auto",
        color: '#e9e9e9',
        fontSize: 25,
    },
    notice: {
        fontSize: 13,
        textAlign: 'center',
        paddingBottom: 70,
        paddingTop: 20,
    },
    imgNotice: {
        width: 16,
        height: 16,
        marginRight: 8,
    },
    contactColor: {
        color: '#f79320'
    },
}))



export default useStyles