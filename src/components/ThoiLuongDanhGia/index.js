import React, { Fragment } from 'react'
import UseThoiLuongDanhGia from '../../util/useApiThoiLuongDanhGia'

function ThoiLuongDanhGia(props) {
    const { thoiLuong, danhGia } = UseThoiLuongDanhGia(props.maPhim)

    return (
        <Fragment>
            <span>{`${thoiLuong} Phút - Điểm Tix ${danhGia}`}</span>
        </Fragment>
    )
}

export default ThoiLuongDanhGia
