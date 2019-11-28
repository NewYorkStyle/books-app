import {IMainStore} from './Modules/Main/Models';

/**
 * Интерфейс экшенов.
 */
export interface IAction {
    type: string;
    payload?: any;
}

/**
 * Общий стор приложения
 */
export interface IStore {
    mainReducer: IMainStore;
}
