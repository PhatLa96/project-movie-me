import { useEffect, useState } from 'react'
import Axios from "axios";
export default function UseThoiLuongDanhGia(maPhim) {
    const [data, setData] = useState({ thoiLuong: '120', danhGia: '10' })


    return { thoiLuong: data.thoiLuong, danhGia: data.danhGia }
}
