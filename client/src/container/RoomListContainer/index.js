// @flow
import * as React from 'react';
import RoomList from '../../stories/screens/RoomList';
export interface Props {
    navigation: any,
}
export interface State { }
export default class RoomListContainer extends React.Component<Props, State> {
    onJoinRoom() {
        console.log('User press join');
        this.props.navigation.navigate('WaitingRoom');
    }
    render() {
        return <RoomList
            navigation={this.props.navigation}
            onJoinRoom={this.onJoinRoom.bind(this)}
        />;
    }
}