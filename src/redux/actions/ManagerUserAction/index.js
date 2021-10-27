import { ManagerUser } from "../../../services/ManagerUserService";
import createAction from ".."
import { userType } from "../../types/ManagerUserType";
import { TOKEN, USER } from "../../../util/settings/config";
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
export const LoginAction = (values, callback) => {
    return async (dispatch) => {
        try {
            const res = await ManagerUser.LoginUser(values)
            dispatch(createAction(userType.POST_LOGIN, res.data.content))
            callback()
            alert("đăng nhập thành công")
            console.log(res)
            localStorage.setItem(TOKEN, res.data.content.accessToken)
            localStorage.setItem(USER, JSON.stringify(res.data.content))
        } catch (err) {
            alert("Tài khoản hoặc mật khẩu không đúng !!!")
            console.log(err)
        }
    }
}
export const fetchMe = () => {
    return async (dispatch) => {
        try {
            const res = await ManagerUser.GetInfoUser()
            console.log(res)
            dispatch(createAction(userType.FETCH_ME, res.data.content))
        } catch (err) {
            console.log(err)
        }
    }
}