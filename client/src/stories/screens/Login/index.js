import * as React from 'react';
import { Platform, Input } from 'react-native';
import { Container, Content, Header, Body, Title, Button, Text, View, Icon, Item, Form, Picker } from 'native-base';
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
				<Icon active name={input.name === 'roomName' ? 'home' : 'md-map'} />
				<Input
					ref={c => (this.textInput = c)}
					placeholder={input.name === 'roomName' ? 'Room Name' : 'Location'}
					{...input}
				/>
			</Item>
		);
	}

	renderSlider({ input: { onChange, value, ...inputProps }, initialValue }) {
		return (
			<Item style={{ height: 48 }}>
				<Icon style={{ marginLeft: 5 }} active name={'ios-man'} />
				<Text style={{ marginLeft: 10 }}>Number of Players</Text>
				<Slider
					step={1}
					minimumValue={2}
					maximumValue={10}
					value={initialValue}
					onValueChange={value => onChange(value)}
				/>
				<Text>{String(value || initialValue)}</Text>
			</Item>
		);
	}

	renderGameType({ input: { onChange, value, ...inputProps }, meta: { touched, error }, children, ...pickerProps }) {
		return (
			<Item error={error && touched}>
				<Icon active name={'md-options'} />
				<Picker
					mode='dropdown'
					style={{ width: '94%' }}
					selectedValue={value}
					onValueChange={value => onChange(value)}
					children={children}
					{...inputProps}
					{...pickerProps}
				>

				</Picker>
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
				<Content padder>
					<Form>
						<Field
							name='roomName'
							component={this.renderInput}
							validate={required}
						/>
						<Field
							name='max'
							component={this.renderSlider}
							initialValue={2}
						/>
						<Field
							name='gameType'
							component={this.renderGameType}
						>
							<Picker label='Any' value='Any' />
							<Picker label='Family' value='Family' />
							<Picker label='Negotiation' value='Negotiation' />
							<Picker label='Euro' value='Euro' />
							<Picker label='Co-op' value='Co-op' />
							<Picker label='Party' value='Party' />
						</Field>
						<Field
							name='location'
							component={this.renderInput}
							validate={required}
						/>
						<Button onPress={handleSubmit}>
							<Text>Create Room</Text>
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
