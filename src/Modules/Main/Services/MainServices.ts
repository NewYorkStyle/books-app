import {getBookData} from '../../../Mocks/BooksData';
import {IBooksFilter, IData} from '../Models';

/**
 * Получение данных.
 *
 * @prop {number} currentlyPage Текущая страница.
 * @param {IBooksFilter} [filter] Фильтр.
 */
export const getData = (currentlyPage: number, filter?: IBooksFilter): Promise<IData> => {
    return new Promise((resolve, reject) => {
        /** Имитация задержки сервера. */
        setTimeout(() => {
            resolve(getBookData(currentlyPage, filter));
        }, 1000);
    });
};
