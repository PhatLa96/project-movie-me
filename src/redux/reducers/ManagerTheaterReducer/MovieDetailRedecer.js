import { theaterType } from "../../types/ManagerTheaterType"

const initialState = {
    arrDetail: []
}

const DetailReducer = (state = initialState, { type, payload }) => {
    switch (type) {

        case theaterType.SET_DETAIL_MOVIE: {
            state.arrDetail = payload
            return { ...state }
        }


        default:
            return state
    }
}
export default DetailReducer