import { theaterType } from "../../types/ManagerTheaterType"

const initialState = {
    arrDetail: {},
    arrCumRapData: [],
    renderArrCumRapData: [],
    loadingArrDetail: false,
}
const DetailReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case theaterType.GET_LOADING_DETAIL: {
            return { ...state, loadingArrDetail: true }
        }
        case theaterType.SET_DETAIL_MOVIE: {
            state.arrDetail = payload
            return { ...state, loadingArrDetail: false }
        }
        case theaterType.FETCH_MOVIE_SCHEDULE: {
            return { ...state, arrCumRapData: payload.arrCumRapData, renderArrCumRapData: payload.renderArrCumRapData }
        }


        default:
            return state
    }
}
export default DetailReducer