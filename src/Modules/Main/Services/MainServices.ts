import {getBookData} from '../../../Mocks/BooksData';
import {IBook, IBooksFilter} from '../Models';

/**
 * Получение данных.
 *
 * @param {IBooksFilter} [filter] Фильтр.
 */
export const getData = (filter?: IBooksFilter): Promise<IBook[]> => {
    return new Promise((resolve, reject) => {
        /** Имитация задержки сервера. */
        setTimeout(() => {
            resolve(getBookData(filter));
        }, 1000);
    });
};
