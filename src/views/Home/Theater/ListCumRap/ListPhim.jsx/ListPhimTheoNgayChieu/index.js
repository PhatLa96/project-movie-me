import React, { Fragment, memo } from 'react'
import BtnGoCheckOut from '../../../../../../components/BtnGoCheckOut';
import formatDate from '../../../../../../util/fomatDate';
import useStyles from './styles'

function ListPhimTheoNgayChieu({ lstLichChieuTheoPhim }) {

    const classes = useStyles()
    const mangChiChuaNgay = lstLichChieuTheoPhim?.map((item) => {
        return item.ngayChieuGioChieu.slice(0, 10);
    })

    const mangNgayKhongTrungLap = [...new Set(mangChiChuaNgay)] // SET() loại bỏ các giá trị bị trùng lặp
    console.log("aaaa", mangNgayKhongTrungLap)
    const filterByDay = (date) => {
        const gioChieuRender = lstLichChieuTheoPhim.filter((item) => {
            if (item.ngayChieuGioChieu.slice(0, 10) === date) {
                return true
            }
            return false
        })
        return gioChieuRender
    }
    return (
        <div style={{ paddingTop: 15 }}>
            {mangNgayKhongTrungLap.map((date, index) => {
                return <Fragment key={index}>
                    <p className={classes.dateFull}>{formatDate(date).dateFull}</p>
                    <div>
                        {filterByDay(date)?.map((lichChieuTheoPhim, index) => {
                            return <Fragment key={index}>
                                <BtnGoCheckOut lichChieuTheoPhim={lichChieuTheoPhim} />
                            </Fragment>
                        })}
                    </div>
                </Fragment>
            })}
        </div>
    )
}

export default memo(ListPhimTheoNgayChieu)
