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


        default:
            return state
    }
}
export default ManagerUserReducer