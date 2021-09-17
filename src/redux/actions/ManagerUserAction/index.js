import { ManagerUser } from "../../../services/ManagerUserService";
import createAction from ".."
import { userType } from "../../types/ManagerUserType";
export const RegisterAction = (values) => {
    return async (dispatch) => {
        try {
            const res = await ManagerUser.PostRegister(values)
            dispatch(createAction(userType.POST_REGISTER, res.data.content));

            alert("Đăng ký thành công")
        } catch (err) {
            alert("Tài khoản hoặc email đã tồn tại")
            console.log(err);
        }

    }

}