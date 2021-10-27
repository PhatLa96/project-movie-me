import { applyMiddleware, combineReducers, compose, createStore } from "redux"
import thunk from "redux-thunk"
import CommentReducer from "./reducers/ManagerCommentReducer/ManagerCommentReducer";
import DatVeReducer from "./reducers/ManagerDatVeReducer/DatVeReducer";
import LazyReducer from "./reducers/ManagerLazyReducer/LazyReducer";
import CarouselReducer from "./reducers/ManagerMovieReducer/CarouselReducer";
import MovieListReducer from "./reducers/ManagerMovieReducer/MovieListReducer";
import DetailReducer from "./reducers/ManagerTheaterReducer/MovieDetailRedecer";
import TheaterReducer from "./reducers/ManagerTheaterReducer/TheaterListReducer";
import ManagerUserReducer from "./reducers/ManagerUserReducer";
import modalTrailerReducer from "./reducers/ModalTrailer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers({
    CarouselReducer,
    MovieListReducer,
    TheaterReducer,
    modalTrailerReducer,
    DetailReducer,
    DatVeReducer,
    CommentReducer,
    ManagerUserReducer,
    LazyReducer
})
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))
export default store