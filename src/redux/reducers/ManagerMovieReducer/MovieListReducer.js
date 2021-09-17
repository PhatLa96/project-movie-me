import { movieType } from "../../types/ManagerMovieType"

const initialState = {
    arrMovie: [],

}
const MovieListReducer = (state = initialState, { type, payload }) => {
    switch (type) {

        case movieType.GET_MOVIE_LIST: {
            state.arrMovie = payload
            return { ...state }
        }


        default:
            return state
    }
}

export default MovieListReducer