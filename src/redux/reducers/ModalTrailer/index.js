import { CLOSE_MODAL, OPEN_MODAL } from "../../types/ModalTrailerType";



const initialState = {

    open: false,
    urlYoutube: "",

}

const modalTrailerReducer = (state = initialState, action) => {
    switch (action.type) {
        case OPEN_MODAL: {
            state.open = action.payload.open
            state.urlYoutube = action.payload.urlYoutube
            return { ...state };
        }
        case CLOSE_MODAL: {
            return { open: action.payload.open, urlYoutube: "" };
        }
        default:
            return state;
    }
}
export default modalTrailerReducer;