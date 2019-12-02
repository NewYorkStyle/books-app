import {IBook, IBooksFilter, IData} from '../Modules/Main/Models';

export const mockBookData = [
    {
        id: '1',
        name: '20000 лье под водой',
        author: 'Жюль Верн',
        genre: 'Фантастика',
    },
    {
        id: '2',
        name: 'Убийство в "Восточном экспрессе"',
        author: 'Агата Кристи',
        genre: 'Детектив',
    },
    {
        id: '3',
        name: 'Война и мир',
        author: 'Лев Толстой',
        genre: 'Роман',
    },
    {
        id: '4',
        name: 'Пикник на обочене',
        author: 'Братья Стругацкие',
        genre: 'Фантастика',
    },
    {
        id: '5',
        name: 'Муму',
        author: 'Иван Тургенев',
        genre: 'Рассказ',
    },
    {
        id: '6',
        name: 'Повесть временных лет',
        author: 'Нестор Летописец',
        genre: 'Повесть',
    },
    {
        id: '7',
        name: 'Сказка о царе Салтане',
        author: 'Александр Пушкин',
        genre: 'Сказка',
    },
    {
        id: '8',
        name: 'Маленький принц"',
        author: 'Антуан де Сент-Экзюпери',
        genre: 'Повесть',
    },
    {
        id: '9',
        name: 'Преступление и наказание',
        author: 'Фёдор Достоевский',
        genre: 'Роман',
    },
    {
        id: '10',
        name: 'Евгений Онегин',
        author: 'Александр Пушкин',
        genre: 'Роман',
    },
    {
        id: '11',
        name: 'Мастер и Маргарита',
        author: 'Михаил Булгаков',
        genre: 'Роман',
    },
    {
        id: '12',
        name: 'Конец Вечности',
        author: 'Айзек Азимов',
        genre: 'Фантастика',
    },
    {
        id: '13',
        name: 'Сказка о попе и о работнике его Балде',
        author: 'Александр Пушкин',
        genre: 'Сказка',
    },
];

/**
 * Получение данных.
 *
 * @prop {number} currentlyPage Текущая страница.
 * @param {IBooksFilter} [filter] Фильтр.
 */
export const getBookData = (currentlyPage: number, filter?: IBooksFilter): IData => {
    let data: IBook[] = mockBookData;
    let response: IData;

    /**
     * Фильтрация.
     */
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

    /**
     * Пагинация.
     */
    let from: number = currentlyPage === 1 ? 0 : (currentlyPage - 1) * 5;
    data = data.slice(from);

    if (data.length <= 5) {
        response = {
            data,
            hasNextPage: false,
        };
    } else {
        response = {
            data: data.slice(0, 5),
            hasNextPage: true,
        };
    }

    return response;
};
