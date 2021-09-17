import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundImage: `linear-gradient(to bottom,rgba(20,50,93,.9),rgba(8,22,48,.9))`,
        paddingTop: "20px",
        borderRadius: "20px",
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: "100%", // Fix IE 11 issue.

        paddingInline: "20px"
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    bg: {
        backgroundImage: `url("https://tix.vn/app/assets/img/icons/bg2.jpg")`,
        marginTop: "-60px",
        width: "100%",
        height: "108vh",
        backgroundSize: "contain",
        backgroundPosition: "center",
    },
    textField: {
        backgroundColor: "#fff",
        borderRadius: 5,
        color: "#000",

    },
    textError: {
        textAlign: "left",
        color: "#dc3545",
        marginBottom: 0
    }
}));
export default useStyles