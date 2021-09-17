import createAction from ".."
import { ManagerMovie } from "../../../services/ManagerMovieService"
import { movieType } from "../../types/ManagerMovieType"

export const GetMovieListAction = async (dispatch) => {
    try {
        const res = await ManagerMovie.GetListMovie()
        dispatch(createAction(movieType.GET_MOVIE_LIST, res.data.content))
    } catch (err) {
        console.log(err)
    }
}
export const movieInfoAction = (maPhim) => {
    return async (dispatch) => {
        try {
            const res = await ManagerMovie.GetDetailMovie(maPhim)
            dispatch(createAction(movieType.SET_DETAIL_MOVIE, res.data.content))

        } catch (err) {
            console.log(err)
        }
    }
}