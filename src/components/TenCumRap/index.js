import React from 'react'
import { colorTheater } from '../../util/settings/theaterData'
import useStyles from './styles'

function TenCumRap({ tenCumRap }) {
    const classes = useStyles({ color: colorTheater[tenCumRap?.slice(0, 3).toUpperCase()] })
    return (
        <div>
            <span className={classes.text_start}>{tenCumRap?.split("-")[0]}</span>
            <span className={classes.text_end}>-{tenCumRap?.split("-")[1]}</span>
        </div>
    )
}

export default TenCumRap
