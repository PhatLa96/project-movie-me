import createAction from ".."
import { ManagerTheater } from "../../../services/ManagerTheaterService"
import { theaterType } from "../../types/ManagerTheaterType"

export const GetDetailShowTime = (maPhim) => {
    return async (dispatch) => {
        try {
            const res = await ManagerTheater.GetMovieDetailShowTime(maPhim)
            dispatch(createAction(theaterType.SET_DETAIL_MOVIE, res.data.content))
        } catch (err) {
            console.log(err)
        }
    }
}