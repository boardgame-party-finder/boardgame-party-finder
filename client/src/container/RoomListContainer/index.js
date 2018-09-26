// @flow
import * as React from 'react';
import RoomList from '../../stories/screens/RoomList';
import { connect } from 'react-redux';
import { listRoom } from './actions';
import { Toast } from 'native-base';

export interface Props {
    navigation: any,
    roomList: Array,
    listRoom: Function,
}
export interface State { }
var roomList = [];
class RoomListContainer extends React.Component<Props, State> {
    onJoinRoom(data) {
        data._from = 'RoomList';
        this.props.navigation.navigate('WaitingRoom', data);
    }
    componentWillMount() {
        this.props.listRoom().then(result => {
            if (result.payload.status === 200) {
                this.props.roomList = result.payload.data;
            } else {
                Toast.show({
                    text: 'Cannot get room list',
                    type: 'danger'
                });
            }
        });
    }
    render() {
        return <RoomList
            navigation={this.props.navigation}
            onJoinRoom={this.onJoinRoom.bind(this)}
            roomList={roomList}
        />;
    }
}

function bindAction(dispatch) {
    return {
        listRoom: data => dispatch(listRoom(data))
    };
}

export default connect(null, bindAction)(RoomListContainer);