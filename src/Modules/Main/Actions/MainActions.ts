import {Dispatch} from 'redux';
import {IBooksFilter, IData} from '../Models';
import {getData} from '../Services/MainServices';
import {ActionsTypes} from './ActionTypes';

export const MainActions = {
    /**
     * Получение данных.
     *
     * @prop {number} currentlyPage Текущая страница.
     * @param {IBooksFilter} [filter] Фильтр.
     */
    getData: (currentlyPage: number, filter?: IBooksFilter) => {
        return (dispatch: Dispatch) => {
            dispatch({
                type: ActionsTypes.GET_DATA_START,
            });
            getData(currentlyPage, filter).then(
                (response: IData) => {
                    dispatch({
                        type: ActionsTypes.GET_DATA_SUCCESS,
                        payload: response,
                    });
                },
                (error: string) => {
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
