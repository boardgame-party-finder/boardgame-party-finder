// @flow
import * as React from 'react';
import RoomList from '../../stories/screens/RoomList';
import { connect } from 'react-redux';
import { listRoom, joinRoom } from './actions';
import { Toast } from 'native-base';

export interface Props {
    navigation: any,
    isLoading: boolean,
    roomList: Array,
    roomId: number,
    listRoom: Function,
    joinRoom: Function
}
export interface State { }
class RoomListContainer extends React.Component<Props, State> {
    onJoinRoom(data) {
        this.props.joinRoom(data.pk);
        this.props.navigation.navigate('WaitingRoom', data);
    }
    componentWillMount() {
        this.props.listRoom().then(result => {
            if (!result.payload.status === 200) {
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
            isLoading={this.props.isLoading}
            roomList={this.props.roomList}
        />;
    }
}

function bindAction(dispatch) {
    return {
        listRoom: data => dispatch(listRoom(data)),
        joinRoom: data => dispatch(joinRoom(data))
    };
}

const mapStateToProps = state => ({
    isLoading: state.listRoomReducer.isLoading,
    roomList: state.listRoomReducer.roomList,
    roomId: state.listRoomReducer.roomId,
});

export default connect(mapStateToProps, bindAction)(RoomListContainer);