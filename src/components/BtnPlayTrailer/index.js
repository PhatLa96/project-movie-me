
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { OPEN_MODAL } from '../../redux/types/ModalTrailerType';
import useStyles from './styles';

function BtnPlayTrailer({ cssRoot, width, height, urlYoutube }) {

    const classes = useStyles({ width, height })
    const dispatch = useDispatch()
    const openModal = () => {
        dispatch({
            type: OPEN_MODAL,
            payload: {
                open:true,
                urlYoutube
            }
        })
    }
    return (
        <div className={`${classes.button} ${cssRoot}`}>
            <img src="https://tix.vn/app/assets/img/icons/play-video.png" className={classes.imgPlay} onClick={() => openModal()} alt="play" />
        </div>
    )
}

export default BtnPlayTrailer
