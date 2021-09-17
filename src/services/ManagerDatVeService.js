import { GROUPID } from "../util/settings/config";
import { baseService } from "./baseService";

export class ManagerDatVeService extends baseService {
    constructor() {
        super()
    }
    GetListPhongVe = (maLichChieu) => {
        return this.get(`/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`)
    }

}
export const ManagerDatVe = new ManagerDatVeService()