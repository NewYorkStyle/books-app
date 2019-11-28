/**
 * Модель state в store
 * @prop {IData} data Данные из БД.
 */
export interface IMainStore {
    data?: string;
    isLoading?: boolean;
}
