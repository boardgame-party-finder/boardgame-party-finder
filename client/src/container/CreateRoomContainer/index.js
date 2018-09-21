// @flow
import * as React from 'react';
import CreateRoom from '../../stories/screens/CreateRoom';
import { connect } from 'react-redux';
import { createRoom } from './actions';
export interface Props {
    navigation: any,
    roomData: Object,
    createRoom: Function,
}
export interface State { }
class CreateRoomContainer extends React.Component<Props, State> {
    submit(data: any) {
        console.log(data)
        this.props.createRoom(data).then(result => {
            if (result.payload.status === 200) {
                this.props.navigation.navigate('WaitingRoom', data);
            } else {
                console.log('error');
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