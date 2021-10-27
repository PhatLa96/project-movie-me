import { TOKEN, USER } from "../../../util/settings/config"
import { userType } from "../../types/ManagerUserType"

const initialState = {
    Users: null
}

const ManagerUserReducer = (state = initialState, { type, payload }) => {
    switch (type) {

        case userType.POST_REGISTER: {
            state.Users = payload
            return { ...state }
        }
        case userType.POST_LOGIN: {
            state.Users = payload
            return { ...state }
        }
        case userType.FETCH_ME: {
            state.Users = payload
            return { ...state }
        }
        case userType.LOG_OUT: {
            localStorage.removeItem(TOKEN)
            localStorage.removeItem(USER)

            return { ...state, Users: null }
        }
        default:
            return state
    }
}
export default ManagerUserReducer