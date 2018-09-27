// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import WaitingRoom from '../../stories/screens/WaitingRoom';
import { Alert } from 'react-native';
import { toggleReady, initialSetup, initialSetupPassed, initialSetupFailed, getRoomData, getRoomDataPassed, getRoomDataFailed, exitRoom } from './actions';
export interface Props {
    navigation: any;
    roomId: number;
    userName: string;
    isReady: boolean;
    roomData: Object;
}
export interface State { }
class WaitingRoomContainer extends React.Component<Props, State> {
    componentWillMount() {
        this.props.initialSetup({
            roomId: this.props.roomId,
            userName: this.props.userName
        });
        this.props.getRoomData(this.props.roomId);
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.props.getRoomData(this.props.roomId);
        }, 1500);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    onBack(data) {
        Alert.alert('Comfirmation', 'Do you really want to leave this room?', [
                { text: 'Cancel', style: 'cancel' },
                { text: 'OK', onPress: () => {
                    this.props.exitRoom({
                        roomId: this.props.roomId,
                        userName: this.props.userName
                    });

                    if (data._from === 'CreateRoom') {
                        this.props.navigation.navigate('Home'); // from Create Room
                    } else {
                        this.props.navigation.goBack(); // from Join Room
                    }
                } },
            ],
            { cancelable: false });
    }

    onReady() {
        this.props.toggleReady({
            roomId: this.props.roomId,
            userName: this.props.userName,
            isReady: this.props.isReady
        });
        this.props.getRoomData(this.props.roomId);
    }

    render() {
        return <WaitingRoom
            navigation={this.props.navigation}
            onReady={this.onReady.bind(this)}
            onBack={this.onBack.bind(this)}
            isReady={this.props.isReady}
            roomData={this.props.roomData}
        />;
    }
}

const mapStateToProps = state => ({
    isReady: state.waitingRoomReducer.isReady,
    userName: state.loginReducer.userName,
    roomId: state.createRoomReducer.roomId,
    roomData: state.waitingRoomReducer.roomData
});

function bindAction(dispatch) {
    return {
        initialSetup: data => dispatch(initialSetup(data)).then(response => {
            dispatch(initialSetupPassed(data));
        }).catch(err => {
            dispatch(initialSetupFailed(err));
        }),
        getRoomData: data => dispatch(getRoomData(data)).then(response => {
            dispatch(getRoomDataPassed(data));
        }).catch(err => {
            dispatch(getRoomDataFailed(err));
        }),
        toggleReady: data => dispatch(toggleReady(data)),
        exitRoom: data => dispatch(exitRoom(data))
    }
};

export default connect(mapStateToProps, bindAction)(WaitingRoomContainer);