// @flow
import * as React from 'react';
import { Toast } from 'native-base';
import { connect } from 'react-redux';
import { login, loginFailed, loginSuccess, setUsername } from './actions';
import Login from '../../stories/screens/Login';
import { AsyncStorage } from 'react-native';

export interface Props {
    navigation: any;
    isError: boolean;
    login: Function;
}
export interface State {}
class LoginContainer extends React.Component<Props, State> {

    componentWillMount() {
        AsyncStorage.getItem('@boardgame:userName').then(userName => {
            if (userName) {
                this.props.setUsername(userName);

                this.props.navigation.navigate('MainScreenNavigator');
            }
        });
    }

    onLogin(data) {
        this.props.login(data.userName).then(result => {
            if (!this.props.isError) {
                AsyncStorage.setItem('@boardgame:userName', data.userName);
                this.props.navigation.navigate('MainScreenNavigator');
            } else {
                Toast.show({
                    text: 'This name already exist',
                    type: 'danger'
                });
            }
        });
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
        login: data => dispatch(login(data)).then((response) => {
            dispatch(loginSuccess(data));
        })
        .catch((err) => {
            dispatch(loginFailed(err));
        }),
        setUsername: data => dispatch(setUsername(data))
    };
}

const mapStateToProps = state => ({
    isError: state.loginReducer.isError
});

export default connect(mapStateToProps, bindAction)(LoginContainer);
