import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    root: {
        textAlign: 'left',
        lineHeight: '30px',
        width: "100%",
    },
    infoTicket: {
        display: "flex",
        gap: "5%"

    },
    img: props => ({
        flex: "30%",
        backgroundImage: `url(${props.imgMovie})`,
        borderRadius: "4px",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",

    }),
    infoTicket_item: {
        flex: "70%"
    },
    text__first: props => ({
        color: `${props.color}`,
        fontWeight: "500",
    }),
    text__second: {
        color: "#000",
        fontWeight: "500",
    },
    table: {
        marginTop: 10,
        width: "100%",
    },
    infoResult_label: {
        margin: "30px 0px 10px",
        fontWeight: 400,
    },
    paymentColor: {
        color: '#f79320'
    },
    errorColor: {
        color: '#fb4226'
    },
    noteresult: {
        fontStyle: 'italic',
        fontWeight: 500,
    },
}))



export default useStyles