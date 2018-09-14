// @flow
import * as React from 'react';
import CreateRoom from '../../stories/screens/CreateRoom';
export interface Props {
    navigation: any,
}
export interface State { }
export default class CreateRoomContainer extends React.Component<Props, State> {
    showResults(data: any) {
        this.props.navigation.navigate('WaitingRoom', data);
    }

    render() {
        return <CreateRoom
            navigation={this.props.navigation}
            onSubmit={this.showResults.bind(this)}
        />;
    }
}