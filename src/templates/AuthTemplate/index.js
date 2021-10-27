import React, { useEffect } from 'react'

import { useLocation, useHistory } from "react-router-dom";
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { makeStyles } from "@material-ui/core"
import { useDispatch } from 'react-redux';
import { Route } from "react-router-dom"




const useStyles = makeStyles(theme => ({
    backgroundImage: {
        width: '100vw',
        height: '100vh',
        backgroundImage: `url("https://tix.vn/app/assets/img/icons/bg2.jpg")`,
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: "center",

    },
    bgBlueColor: {
        backgroundImage: "linear-gradient(to bottom,rgba(20,50,93,.9),rgba(8,22,48,.9))",
        width: 600,
        height: "fit-content",
        [theme.breakpoints.down("sm")]: {
            width: "100%",
            height: "100%",
        },
        borderRadius: 6,
        position: "relative",
        zIndex: 1000,
    },
    closeButton: {
        position: 'absolute',
        top: 0,
        right: 0,
        transform: "translate(50%,-50%)",
        border: '2px solid white',
        [theme.breakpoints.down("sm")]: {
            border: "none",
            top: 19,
            right: 24,
        },
        '&:focus': {
            outline: 'none'
        },
        '&:hover': { opacity: 0.7 },
        transition: "all .2s",
    },
}));

export default function AuthLayout(props) {
    const { Component, ...restRoute } = props
    const classes = useStyles();
    let location = useLocation();
    console.log("location", location)
    const history = useHistory();
    const dispatch = useDispatch();
    const handleClose = () => { // nhấn nút X
        if (location.state?.slice(0, 7) === "/detail") { // chỉ duy nhất trang chitietphim là quay lại ngay, còn lại đều về home
            history.push(location.state)
            return
        }

        setTimeout(() => {
            history.push("/")
        }, 50);
    }
    useEffect(() => {
        window.scrollTo(0, 0);
    })
    return <Route {...restRoute} render={(propsRoute) => {
        return <div className={classes.backgroundImage}>
            <div className={classes.bgBlueColor}>
                <Component {...propsRoute} />
                <IconButton className={classes.closeButton} onClick={handleClose} >
                    <CloseIcon style={{ color: 'white' }} fontSize='small' />
                </IconButton>
            </div>
        </div>
    }} />

}
