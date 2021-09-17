import { GROUPID } from "../util/settings/config";
import { baseService } from "./baseService";

export class ManagerTheaterService extends baseService {
    constructor() {
        super()
    }

    GetListTheater = () => {
        return this.get(`/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=${GROUPID}`)
    }
    GetMovieDetailShowTime = (maPhim) => {
        return this.get(`/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`)
    }

}
export const ManagerTheater = new ManagerTheaterService()