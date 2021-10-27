import { Button } from '@material-ui/core'
import React from 'react'
import { useHistory } from 'react-router'
import useStyles from './styles'

function BtnGoCheckOut({ lichChieuTheoPhim }) {
    const classes = useStyles()
    const history = useHistory()


    const calculateTimeout = (ngayChieuGioChieu) => {
        const fakeTime = 120
        const timeInObj = new Date(ngayChieuGioChieu) // tạo ra đối tượng mới có định dạng như vậy Thu Oct 28 2021 12:45:00 GMT+0700 (Indochina Time)
        const timeOutObj = new Date(timeInObj.getTime() + fakeTime * 60 * 1000) //Thu Oct 28 2021 14:45:00 GMT+0700 (Indochina Time) , 12h45p + 120*60p*1000ms(2 tiếng)

        return timeOutObj.toLocaleTimeString([], { hour12: false }).slice(0, 5) // 14:45:00

    }

    return (
        <Button className={classes.button} onClick={() => history.push(`/datve/${lichChieuTheoPhim.maLichChieu}`)}>
            <span className={classes.inTime}>{lichChieuTheoPhim.ngayChieuGioChieu.slice(11, 16)} </span>
            <span> {` ~ ${calculateTimeout(lichChieuTheoPhim.ngayChieuGioChieu)}`}</span>
        </Button>
    )
}

export default BtnGoCheckOut
