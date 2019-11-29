import {IAction} from '../../../Models';
import {ActionsTypes} from '../Actions/ActionTypes';
import {IMainStore} from '../Models';

const initialState: IMainStore = {
    data: null,
};

const mainReducer = (state = initialState, action: IAction) => {
    switch (action.type) {
        case ActionsTypes.GET_DATA:
            return {
                ...state,
                data: action.payload,
            };
        default:
            return state;
    }
};

export default mainReducer;
