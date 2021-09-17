import { GROUPID } from "../util/settings/config";
import { baseService } from "./baseService";

export class ManagerUserService extends baseService {
    constructor() {
        super()
    }

    PostRegister = (values) => {
        return this.post(`/api/QuanLyNguoiDung/DangKy`, values)
    }


}
export const ManagerUser = new ManagerUserService()