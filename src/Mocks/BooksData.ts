import {IBook, IBooksFilter} from '../Modules/Main/Models';

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
];

export const getBookData = (filter?: IBooksFilter): IBook[] => {
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

    return data;
};
