import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import * as React from 'react';

/**
 * Компонент для отрисовки таблицы.
 *
 * @prop {Array<any>} items Данные для отрисовки.
 */
export const TableView: React.SFC<{items: Array<any>}> = (props) => (
    <Table className="table" aria-label="simple table">
        <TableHead>
            <TableRow>
                <TableCell>Название книги</TableCell>
                <TableCell>Автор</TableCell>
                <TableCell>Жанр</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {props.items.map((book) => (
                <TableRow key={book.id}>
                    <TableCell>{book.name}</TableCell>
                    <TableCell>{book.author}</TableCell>
                    <TableCell>{book.genre}</TableCell>
                </TableRow>
            ))}
        </TableBody>
    </Table>
);
