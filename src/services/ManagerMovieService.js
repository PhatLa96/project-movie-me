import { GROUPID } from "../util/settings/config";
import { baseService } from "./baseService";

export class ManagerMovieService extends baseService {
 
    GetListBanner = () => {
        return this.get(`/api/QuanLyPhim/LayDanhSachBanner`)
    }
    GetListMovie = () => {
        return this.get(`/api/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUPID}`)
    }
    GetDetailMovie = (maPhim) => {
        return this.get(`/api/QuanLyPhim/LayThongTinPhim?MaPhim=${maPhim}`);
    }
}
export const ManagerMovie = new ManagerMovieService()