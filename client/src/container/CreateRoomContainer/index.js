// @flow
import * as React from 'react';
import CreateRoom from '../../stories/screens/CreateRoom';
export interface Props {
    navigation: any,
}
export interface State { }
export default class CreateRoomContainer extends React.Component<Props, State> {
    render() {
        return <CreateRoom navigation={this.props.navigation} />;
    }
}
