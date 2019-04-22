import {actionTypes} from "../actions";


export default (state = null, action) => {
    switch (action.type) {
        case actionTypes.DATA_LOAD_SUCCESS:
            return {loaded: true};
        case actionTypes.DATA_COUNT:
            return {count: state.count + 1};
        default:
            return state;
    }
}
