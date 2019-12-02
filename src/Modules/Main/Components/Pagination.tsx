import {Button} from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import * as React from 'react';

/**
 * Компонент для отрисовки пагинации.
 *
 * @prop {number} currentlyPage Текущая страница.
 * @prop {boolean} hasNextPage Наличие следующей страницы.
 * @prop {function} onNextPageClick Обработчик нажания на следующую страницу.
 * @prop {function} onPrevPageClick Обработчик нажания на предыдущую страницу.
 */
export const Pagination: React.SFC<{
    currentlyPage: number;
    hasNextPage: boolean;
    onNextPageClick: () => void;
    onPrevPageClick: () => void;
}> = (props) => {
    const {currentlyPage, hasNextPage, onNextPageClick, onPrevPageClick} = props;
    return (
        <div className="pagination">
            <Button onClick={onPrevPageClick} disabled={currentlyPage === 1}>
                <ArrowBackIcon />
            </Button>
            <span>{currentlyPage}</span>
            <Button onClick={onNextPageClick} disabled={!hasNextPage}>
                <ArrowForwardIcon />
            </Button>
        </div>
    );
};
