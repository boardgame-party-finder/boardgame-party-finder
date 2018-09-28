// @flow
import * as React from 'react';
import RoomList from '../../stories/screens/RoomList';
import { connect } from 'react-redux';
import { listRoom, joinRoom, joinRoomSuccess, joinRoomFail } from './actions';
import { Toast } from 'native-base';

export interface Props {
    navigation: any,
    isLoading: boolean,
    roomList: Array,
    listRoom: Function,
    joinRoom: Function,
    userName: string
}
export interface State { }
class RoomListContainer extends React.Component<Props, State> {
    onJoinRoom(data) {
        if (data.max <= data.inusers.length) {
            Toast.show({
                text: 'This room is full',
                type: 'danger'
            });
        } else {
            this.props.joinRoom({
                userName: this.props.userName,
                roomId: data.pk
            }).then(result => {
                if (!this.props.isJoinRoomError) {
                    this.props.navigation.navigate('WaitingRoom');
                } else {
                    Toast.show({
                        text: 'Cannot join the room',
                        type: 'danger'
                    });
                }
            });
        }
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
        joinRoom: data => dispatch(joinRoom(data)).then(res => {
            dispatch(joinRoomSuccess(data));
        }).catch(err => {
            dispatch(joinRoomFail(err));
        })
    };
}

const mapStateToProps = state => ({
    isLoading: state.listRoomReducer.isLoading,
    roomList: state.listRoomReducer.roomList,
    roomId: state.listRoomReducer.roomId,
    isJoinRoomError: state.listRoomReducer.isJoinRoomError,
    userName: state.loginReducer.userName,
});

export default connect(mapStateToProps, bindAction)(RoomListContainer);