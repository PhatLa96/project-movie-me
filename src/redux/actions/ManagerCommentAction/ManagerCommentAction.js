import createAction from ".."
import { ManagerComment } from "../../../services/ManagerCommentService"
import { commentType } from "../../types/ManagerCommentType"

export const GetComment = () => {
    return async (dispatch) => {
        try {
            const res = await ManagerComment.GetCommentService()
            dispatch(createAction(commentType.GET_COMMENT, res.data))
        } catch (err) {
            console.log(err)
        }
    }
}