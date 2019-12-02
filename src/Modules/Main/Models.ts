/**
 * Модель книги.
 *
 * @prop {string} author Автор.
 * @prop {string} genre Жанр.
 * @prop {string} id Уникальынй идетификатор.
 * @prop {string} name Название.
 */
export interface IBook {
    author: string;
    genre: string;
    id: string;
    name: string;
}

/**
 * Модель фильтра книг.
 *
 * @prop {string} [author] Автор.
 * @prop {string} [genre] Жанр.
 * @prop {string} [name] Название.
 */
export interface IBooksFilter {
    author?: string;
    genre?: string;
    name?: string;
}

/**
 * Модель данных с бэка.
 * @prop {IBook[]} [data] Список кник.
 * @prop {string} [errorMsg] Сообщение об ошибке.
 * @prop {boolean} hasNextPage Наличие следующей страницы.
 */
export interface IData {
    data?: IBook[];
    errorMsg?: string;
    hasNextPage: boolean;
}

/**
 * Модель state в store.
 *
 * @prop {IBook[]} [data] Список кник.
 * @prop {boolean} [isLoading] Состояние загрузки.
 */
export interface IMainStore {
    data?: IData;
    isLoading?: boolean;
}
