import {mockBookData} from '../../../Mocks/BooksData';
import {IBook, IBooksFilter} from '../Models';
import {ActionsTypes} from './ActionTypes';

/**
 * Получение данных.
 *
 * @param {IBooksFilter} [filter] Фильтр.
 */
export const MainActions = {
    getData: (filter?: IBooksFilter) => {
        let data = mockBookData;

        if (!!filter) {
            let key: keyof IBooksFilter;
            data = mockBookData.filter((item: IBook) => {
                for (key in filter) {
                    if (key === 'name') {
                        return item[key].toLowerCase().indexOf(filter[key].toLowerCase()) !== -1;
                    }
                    if (!!filter[key] && item[key] !== filter[key]) return false;
                }
                return true;
            });
        }

        return {
            type: ActionsTypes.GET_DATA,
            payload: data,
        };
    },
};

export type IActions = typeof MainActions;
