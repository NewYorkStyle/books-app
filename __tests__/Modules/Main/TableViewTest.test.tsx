import * as React from 'react';
import {TableView} from '../../../src/Modules/Main/Components/TableView';
const TestRenderer = require('react-test-renderer');

const data = [
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
];

it('renders correctly', () => {
    const tree = TestRenderer.create(<TableView items={data} />).toJSON();
    expect(tree).toMatchSnapshot();
});
