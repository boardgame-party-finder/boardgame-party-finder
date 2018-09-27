// @flow
import * as React from 'react';
import { Toast } from 'native-base';
import { connect } from 'react-redux';
import { login, loginFailed, loginSuccess } from './actions';
import Login from '../../stories/screens/Login';

export interface Props {
    navigation: any;
    isError: boolean;
    login: Function;
}
export interface State {}
class LoginContainer extends React.Component<Props, State> {

    onLogin(data) {
        this.props.login(data.userName).then(result => {
            if (!this.props.isError) {
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
            dispatch(loginSuccess(response.payload.data));
        })
        .catch((err) => {
            dispatch(loginFailed(err));
        })
    };
}

const mapStateToProps = state => ({
    isError: state.loginReducer.isError
});

export default connect(mapStateToProps, bindAction)(LoginContainer);
