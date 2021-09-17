import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles({
    text_start: props => ({
        color: props.color ? `${props.color}` : "#000",
        fontWeight: 500,
        fontSize: 14
    }),
    text_end: {
        color: "#000",
        fontWeight: 500
    }
})
export default useStyles