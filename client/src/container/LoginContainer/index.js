// @flow
import * as React from 'react';
import { Toast } from 'native-base';
import { connect } from 'react-redux';
import { login } from './actions';
import Login from '../../stories/screens/Login';

export interface Props {
    navigation: any;
}
export interface State {}
class LoginContainer extends React.Component<Props, State> {

    onLogin(data) {
        // if (this.props.valid) {
            // this.props.createRoom(this.props).then(result => {
            //     if (result.payload.status === 200) {
                    this.props.navigation.navigate('MainScreenNavigator');
            //     } else {
            //         Toast.show({
            //             text: 'Cannot create the room',
            //             buttonText: 'I got it',
            //             type: 'danger'
            //         });
            //     }
            // });
        // } else {
        //   Toast.show({
        //     text: 'You have to enter the name',
        //     duration: 2000,
        //     position: 'top',
        //     textStyle: { textAlign: 'center' }
        //   });
        // }
    }

    render() {
        return (
            <Login
                navigation={this.props.navigation}
                onSubmit={this.onLogin.bind(this)}
            />
        );
    }
}
function bindAction(dispatch) {
    return {
        login: data => dispatch(login(data))
    };
}

export default connect(null, bindAction)(LoginContainer);
