import createAction from ".."
import { ManagerTheater } from "../../../services/ManagerTheaterService"
import { theaterType } from "../../types/ManagerTheaterType"

export const GetTheaterList = async (dispatch) => {
    try {
        const res = await ManagerTheater.GetListTheater()
        dispatch(createAction(theaterType.GET_THEATER_LIST, res.data.content))
    } catch (err) {
        console.log(err)
    }
}