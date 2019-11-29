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
 * Модель state в store.
 *
 * @prop {IBook[]} [data] Список кник.
 */
export interface IMainStore {
    data?: IBook[];
}
