// @flow
import * as React from 'react';
import WaitingRoom from '../../stories/screens/WaitingRoom';
export interface Props {
    navigation: any,
}
export interface State { }
export default class WaitingRoomContainer extends React.Component<Props, State> {
    onBack() {
        // from Create Room
        this.props.navigation.navigate('Home');

        // from Join Room
        // this.props.navigation.goBack()
    }
    onReady() {
        console.log('User press ready');
    }
    render() {
        return <WaitingRoom
            navigation={this.props.navigation}
            onReady={this.onReady.bind(this)}
            onBack={this.onBack.bind(this)}
        />;
    }
}