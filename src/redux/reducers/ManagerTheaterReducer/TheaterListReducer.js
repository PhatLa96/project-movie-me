import { theaterType } from "../../types/ManagerTheaterType"

const initialState = {
    arrTheater: []
}

const TheaterReducer = (state = initialState, { type, payload }) => {
    switch (type) {

        case theaterType.GET_THEATER_LIST: {
            state.arrTheater = payload
            return { ...state }
        }


        default:
            return state
    }
}
export default TheaterReducer