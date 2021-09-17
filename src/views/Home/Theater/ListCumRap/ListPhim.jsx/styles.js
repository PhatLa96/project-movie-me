import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    listPhim: props => ({
        flex: "0 0 60%",
        overflowY: "auto",
        height: 705,
        borderLeft: "1px solid #ebebec",
        ...props.customScrollbar
    }),
    movieInfo: props => ({
        padding: "20px 15px 15px 20px",
        ...props.underLine
    }),
    textMovie:{
        paddingLeft:10
    }

})
export default useStyles