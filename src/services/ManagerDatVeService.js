import { GROUPID } from "../util/settings/config";
import { baseService } from "./baseService";

export class ManagerDatVeService extends baseService {

    GetListPhongVe = (maLichChieu) => {
        return this.get(`/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`)
    }
    layThongTinDatVe = (thongTinDatVe) => {
        return this.post(`/api/QuanLyDatVe/DatVe`, thongTinDatVe)
    }

}
export const ManagerDatVe = new ManagerDatVeService()