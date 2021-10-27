import { movieType } from "../../types/ManagerMovieType"

const initialState = {
    arrMovie: [],
    loadingArrMovie: false,
}
const MovieListReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case movieType.GET_MOVIE_LIST_LOADING: {
            return { ...state, loadingArrMovie: true }
        }
        case movieType.GET_MOVIE_LIST: {
            state.arrMovie = payload
            state.loadingArrMovie = false
            return { ...state }
        }


        default:
            return state
    }
}

export default MovieListReducer