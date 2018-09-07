import * as React from 'react';
import { Container, Header, Title, Content, Text, Button, Icon, Left, Right, Body, Form, Item, Input } from 'native-base';
import { Field, reduxForm } from 'redux-form';
import { Slider } from 'react-native';
import styles from './styles';

const required = value => (value ? undefined : 'Required');

export interface Props {
    navigation: any;
}
export interface State { }

class CreateRoomForm extends React.Component<Props, State> {
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

    renderSlider(field) {
        return (
            <Item style={{ height: 48 }}>
                <Icon active name={'ios-man'}/>
                <Text style={{ marginLeft: 12 }}>Number of Players</Text>
                <Slider
                    style={styles.slider}
                    step={1}
                    minimumValue={2}
                    maximumValue={10}
                    value={field.initialValue}
                    onValueChange={(value) => field.input.onChange(value)}
            />
                <Text>{String(field.input.value || field.initialValue)}</Text>
            </Item>
        );
    }

    render() {
        const param = this.props.navigation.state.params;
        const { handleSubmit, valid } = this.props;
        return (
            <Container>
                <Header>
                    <Left>
                        <Button transparent onPress={() => this.props.navigation.goBack()}>
                            <Icon name="ios-arrow-back" />
                        </Button>
                    </Left>
                    <Body style={{ flex: 3 }}>
                        <Title>Create Room</Title>
                    </Body>
                    <Right />
                </Header>
                <Content padder>
                    <Form>
                        <Field
                            name='roomName'
                            component={this.renderInput}
                            validate={required}
                        />
                        <Field
                            name='numberOfPlayers'
                            component={this.renderSlider}
                            initialValue={2}
                        />
                        <Field
                            name='location'
                            component={this.renderInput}
                            validate={required}
                        />
                        <Button style={styles.submitButton} onPress={handleSubmit} disabled={!valid}>
                            <Text>Create Room</Text>
                        </Button>
                    </Form>
                </Content>
            </Container>
        );
    }
}

const CreateRoom = reduxForm({
    form: 'createRoom'
})(CreateRoomForm);

export default CreateRoom;
