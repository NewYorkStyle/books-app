import TextField from '@material-ui/core/TextField';
import * as React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators, Dispatch} from 'redux';
import {IStore} from '../../../Models';
import '../styles.css';
import {MainActions} from '../Actions/MainActions';
import {IActions} from '../Actions/MainActions';
import {Pagination} from '../Components/Pagination';
import {Select} from '../Components/Select';
import {TableView} from '../Components/TableView';
import {authorsOptions, genresOptions} from '../Consts';
import {IBooksFilter, IData} from '../Models';

/**
 * Модель props на странице Main.
 *
 * @prop {IMainActions} [actions] Экшены.
 * @prop {IData} [data] Данные из БД.
 * @prop {boolean} [isLoading] Сообщение об ошибке.
 */
export interface IMainProps {
    actions?: IActions;
    data?: IData;
    isLoading?: boolean;
}

/**
 * Модель state на странице Main.
 *
 * @param {IBooksFilter} [filter] Фильтр.
 * @param {number} currentlyPage Текущая страница.
 */
export interface IMainState {
    filter?: IBooksFilter;
    currentlyPage: number;
}

/**
 * Компонент для отображения книг и их фильтрации.
 */
class Main extends React.Component<IMainProps, IMainState> {
    constructor(props: IMainProps) {
        super(props);

        this.state = {
            filter: {
                author: '',
                genre: '',
                name: '',
            },
            currentlyPage: 1,
        };
    }

    componentDidMount = () => {
        const {currentlyPage, filter} = this.state;
        // Получаем данные на ините страницы.
        this.props.actions.getData(currentlyPage, filter);
    };

    /**
     * Обработчик изменения фильтра по авторам.
     */
    handleAuthorFilterOnChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        this.onFilterChange('author', e.target.value);
    };

    /**
     * Обработчик изменения фильтра по жанрам.
     */
    handleGenreFilterOnChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        this.onFilterChange('genre', e.target.value);
    };

    /**
     * Обработчик изменения фильтра по названию.
     */
    handleNameFilterOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let filterValue = e.target.value;
        this.setState((prevState) => ({
            filter: {
                ...prevState.filter,
                name: filterValue,
            },
        }));
    };

    /**
     * Обаботчик изменения фильтра.
     */
    onFilterChange = (field: string, value: string) => {
        const {actions} = this.props;
        const {filter} = this.state;

        actions.getData(1, {
            ...filter,
            [field]: value,
        });
        this.setState((prevState) => ({
            filter: {
                ...prevState.filter,
                [field]: value,
            },
            currentlyPage: 1,
        }));
    };

    /**
     * Обработчик нажатия клавиши Enter для фильтра по названию.
     */
    handleNameFilterOnKeyPress = (e: any) => {
        if (e.key === 'Enter' || e.code === 'Enter') {
            const {actions} = this.props;
            const {filter} = this.state;

            actions.getData(1, filter);
            this.setState({currentlyPage: 1});
        }
    };
    /**
     * Обработчик нажания на следующую страницу
     */
    handleonNextPageClick = () => {
        const {actions} = this.props;
        const {currentlyPage, filter} = this.state;

        actions.getData(currentlyPage + 1, filter);
        this.setState((prevState) => ({
            currentlyPage: prevState.currentlyPage + 1,
        }));
    };
    /**
     * Обработчик нажания на предыдущую страницу
     */
    handleonPrevPageClick = () => {
        const {actions} = this.props;
        const {currentlyPage, filter} = this.state;

        actions.getData(currentlyPage - 1, filter);
        this.setState((prevState) => ({
            currentlyPage: prevState.currentlyPage - 1,
        }));
    };

    /**
     * Отрисовка секции с фильтрами.
     */
    renderFilterSection = (): JSX.Element => {
        const {
            filter: {author, genre, name},
        } = this.state;

        return (
            <div className="filter-section">
                <TextField
                    className="filter"
                    label="Name"
                    value={name}
                    onChange={this.handleNameFilterOnChange}
                    onKeyPress={this.handleNameFilterOnKeyPress}
                />
                <Select label="Author" onChange={this.handleAuthorFilterOnChange} options={authorsOptions} value={author} />
                <Select label="Genre" onChange={this.handleGenreFilterOnChange} options={genresOptions} value={genre} />
            </div>
        );
    };

    render(): JSX.Element {
        const {
            data: {data, hasNextPage},
            isLoading,
        } = this.props;
        const {currentlyPage} = this.state;

        return (
            <div className="container">
                {this.renderFilterSection()}
                {isLoading ? (
                    <div>Загрузка...</div>
                ) : (
                    data && (
                        <div>
                            <TableView items={data} />{' '}
                            <Pagination
                                currentlyPage={currentlyPage}
                                hasNextPage={hasNextPage}
                                onNextPageClick={this.handleonNextPageClick}
                                onPrevPageClick={this.handleonPrevPageClick}
                            />
                        </div>
                    )
                )}
            </div>
        );
    }
}

const mapStateToProps = (store: IStore) => ({
    data: store.mainReducer.data,
    isLoading: store.mainReducer.isLoading,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    actions: bindActionCreators(MainActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
