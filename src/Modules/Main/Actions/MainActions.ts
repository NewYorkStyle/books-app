import {Dispatch} from 'redux';
import {IBooksFilter} from '../Models';
import {getData} from '../Services/MainServices';
import {ActionsTypes} from './ActionTypes';

export const MainActions = {
    /**
     * Получение данных.
     *
     * @param {IBooksFilter} [filter] Фильтр.
     */
    getData: (filter?: IBooksFilter) => {
        return (dispatch: Dispatch) => {
            dispatch({
                type: ActionsTypes.GET_DATA_START,
            });
            getData(filter).then(
                (response) => {
                    dispatch({
                        type: ActionsTypes.GET_DATA_SUCCESS,
                        payload: response,
                    });
                },
                (error) => {
                    console.log(error);
                    dispatch({
                        type: ActionsTypes.GET_DATA_FAILURE,
                        payload: error,
                    });
                }
            );
        };
    },
};

export type IActions = typeof MainActions;
