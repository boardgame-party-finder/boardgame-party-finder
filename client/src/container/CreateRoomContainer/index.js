// @flow
import * as React from 'react';
import CreateRoom from '../../stories/screens/CreateRoom';
import { connect } from 'react-redux';
import { createRoom, createRoomSuccess, createRoomFailed } from './actions';
import { Keyboard } from 'react-native'
import { Toast } from 'native-base';

export interface Props {
    navigation: any,
    roomId: number,
    createRoom: Function,
}
export interface State { }
class CreateRoomContainer extends React.Component<Props, State> {
    submit(data: any) {
        Keyboard.dismiss();
        this.props.createRoom(data).then(result => {
            if (!this.props.isCreateRoomError) {
                data._from = 'CreateRoom';
                this.props.navigation.navigate('WaitingRoom', data);
            } else {
                Toast.show({
                    text: 'Cannot create the room',
                    type: 'danger'
                });
            }
        });
    }

    render() {
        return <CreateRoom
            navigation={this.props.navigation}
            onSubmit={this.submit.bind(this)}
        />;
    }
}

function bindAction(dispatch) {
    return {
        createRoom: data => dispatch(createRoom(data)).then(response => {
            dispatch(createRoomSuccess(data));
        })
        .catch((err) => {
            dispatch(createRoomFailed(err));
        })
    };
}

const mapStateToProps = state => ({
    isCreateRoomError: state.createRoomReducer.isCreateRoomError,
    roomId: state.createRoomReducer.roomId
});

export default connect(mapStateToProps, bindAction)(CreateRoomContainer);