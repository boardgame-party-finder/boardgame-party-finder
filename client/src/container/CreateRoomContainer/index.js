// @flow
import * as React from 'react';
import CreateRoom from '../../stories/screens/CreateRoom';
import { connect } from 'react-redux';
import { createRoom } from './actions';
import { Keyboard } from 'react-native'
import { Toast } from 'native-base';

export interface Props {
    navigation: any,
    roomData: Object,
    createRoom: Function,
}
export interface State { }
class CreateRoomContainer extends React.Component<Props, State> {
    submit(data: any) {
        Keyboard.dismiss();
        this.props.createRoom(data).then(result => {
            if (result.payload.status === 200) {
                this.props.navigation.navigate('WaitingRoom', data);
            } else {
                Toast.show({
                    text: 'Cannot create the room',
                    buttonText: 'I got it',
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
        createRoom: data => dispatch(createRoom(data))
    };
}

export default connect(null, bindAction)(CreateRoomContainer);