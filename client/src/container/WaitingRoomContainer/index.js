// @flow
import * as React from 'react';
import WaitingRoom from '../../stories/screens/WaitingRoom';
export interface Props {
    navigation: any,
}
export interface State { }
export default class CWaitingRoomContainer extends React.Component<Props, State> {
    onReady() {
        console.log('User press ready');
    }
    render() {
        return <WaitingRoom
            navigation={this.props.navigation}
            onSubmit={this.onReady}
        />;
    }
}