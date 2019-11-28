import {ActionsTypes} from './ActionTypes';

/**
 * Получение данных
 */
export const getData = () => ({
    type: ActionsTypes.GET_DATA,
    payload: 'Test data',
});
