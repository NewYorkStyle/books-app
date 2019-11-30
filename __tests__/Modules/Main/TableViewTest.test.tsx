import * as React from 'react';
import {mockBookData} from '../../../src/Mocks/BooksData';
import {TableView} from '../../../src/Modules/Main/Components/TableView';

const TestRenderer = require('react-test-renderer');

it('renders correctly', () => {
    const tree = TestRenderer.create(<TableView items={mockBookData} />).toJSON();
    expect(tree).toMatchSnapshot();
});
