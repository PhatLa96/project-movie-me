import { commentType } from "../../types/ManagerCommentType"

const initialState = {
    commentList: []
}

const CommentReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case commentType.GET_COMMENT: {
            state.commentList = payload
            return { ...state }
        }

        default:
            return state
    }
}
export default CommentReducer