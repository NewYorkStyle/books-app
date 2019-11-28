import * as React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators, Dispatch} from 'redux';
import {IStore} from '../../../Models';
import * as MainActions from '../Actions/MainActions';

/**
 * Модель props в на странице Main.
 *
 * @prop {string} data Данные из БД.
 * @prop {IMainActions} mainActions Экшены.
 */
export interface IMainProps {
    data?: string;
    mainActions?: any;
}

class Main extends React.Component<IMainProps, {}> {
    componentDidMount = () => {
        this.props.mainActions.getData();
    };

    render(): JSX.Element {
        const {data} = this.props;

        return <div>{data}</div>;
    }
}

const mapStateToProps = (store: IStore) => ({
    data: store.mainReducer.data,
});
const mapDispatchToProps = (dispatch: Dispatch) => ({
    mainActions: bindActionCreators(MainActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
