import { movieType } from "../../types/ManagerMovieType"

const initialState = {
    arrBanner: []
}

const CarouselReducer = (state = initialState, { type, payload }) => {
    switch (type) {

        case movieType.GET_CAROUSEL: {
            state.arrBanner = payload
            return { ...state }
        }
        default:
            return state
    }
}
export default CarouselReducer