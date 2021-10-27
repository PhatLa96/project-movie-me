import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({

    root: {
        width: '100%',
        boxShadow: "0 0 15px rgb(0 0 0 / 30%)",
        display: 'flex',
        justifyContent: 'space-between',
        padding: 10,
        height: 100,
    },

    label: {
        "& .css-qivjh0-MuiStepLabel-label.MuiStepLabel-alternativeLabel":{
            marginTop:"10px"
        },
        color: "#9b9b9b",
     
    },
    account: {
        cursor: "pointer",
        textAlign: 'center',
        textTransform: "uppercase",
        flex: "0 0 150px",
    },
    hoTen: {
        marginTop: 7,
        lineHeight: 1.43,
        color: "#9b9b9b",
    },
    avatar: {
        display: "inline-block",
        width: "50px",
        height: "50px",
        borderRadius: "50%",
    },


}))



export default useStyles