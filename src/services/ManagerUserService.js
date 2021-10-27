import { GROUPID } from "../util/settings/config";
import { baseService } from "./baseService";

export class ManagerUserService extends baseService {
    constructor() {
        super()
    }

    PostRegister = (values) => {
        return this.post(`/api/QuanLyNguoiDung/DangKy`, values)
    }
    LoginUser = (values) => {
        return this.post(`/api/QuanLyNguoiDung/DangNhap`, values)
    }
    GetInfoUser = () => {
        return this.post(`/api/QuanLyNguoiDung/ThongTinTaiKhoan`)
    }
}
export const ManagerUser = new ManagerUserService()