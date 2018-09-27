import * as React from 'react';
import { Platform  } from 'react-native';
import { Container, Content, Header, Body, Title, Button, Text, View, Icon, Item, Form, Picker, Input } from 'native-base';
import { Field, reduxForm } from 'redux-form';
import { Slider } from 'react-native';

const required = value => (value ? undefined : 'Required');

export interface Props {
	navigation: any;
}
export interface State {}

class LoginForm extends React.Component<Props, State> {
	onSliderChange(value) {
		this.setState(() => {
			return {
				value: parseFloat(value)
			}
		});
	}

	renderInput({ input, label, type, meta: { touched, error, warning } }) {
		return (
			<Item error={error && touched}>
				<Icon active name='person' />
				<Input
					ref={c => (this.textInput = c)}
					placeholder='Enter your name'
					{...input}
				/>
			</Item>
		);
	}

	render() {
		const { handleSubmit } = this.props;

		return (
			<Container>
				<Header style={{ height: 300 }}>
					<Body style={{ alignItems: 'center', flex: 1 }}>
						<Icon name="md-contacts" style={{ fontSize: 150 }} />
						<Title>Board Game Party Finder</Title>
						<View padder>
							<Text style={{ color: Platform.OS === 'ios' ? '#000' : '#FFF' }}>
								Play with strangers...
							</Text>
						</View>
					</Body>
				</Header>
				<Content style={{ marginTop: 20 }} padder>
					<Form>
						<Field
                            name='userName'
                            component={this.renderInput}
                            validate={required}
                        />
						<Button style={{ marginTop: 30 }} block onPress={handleSubmit}>
							<Text>Login</Text>
						</Button>
					</Form>
				</Content>
			</Container>
		);
	}
}

const Login = reduxForm({
	form: 'login'
})(LoginForm);

export default Login;
