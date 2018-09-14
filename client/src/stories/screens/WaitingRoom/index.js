import * as React from 'react';
import {
    Container,
    Header,
    Title,
    Content,
    Text,
    Button,
    Body,
    Left,
    Right,
    Thumbnail,
    View,
    Icon,
} from 'native-base';

import styles from './styles';
export interface Props {
    navigation: any;
    list: any;
}
export interface State { }
class WaitingRoom extends React.Component<Props, State> {
    renderPlayerLists() {

    }

    render() {
        const { handleSubmit, valid } = this.props;
        const params = this.props.navigation.state.params || {};
        const gameType = params.gameType;
        const location = params.location;
        const numberOfPlayers = params.numberOfPlayers;
        const roomName = params.roomName;

        return (
            <Container>
                <Header>
                    <Left>
                        <Button transparent onPress={() => this.props.navigation.goBack()}>
                            <Icon name="ios-arrow-back" />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Waiting Room</Title>
                    </Body>
                    <Right />
                </Header>
                <Content padder> 
                    <Text>gameType: {JSON.stringify(gameType)}</Text>
                    <Text>location: {JSON.stringify(location)}</Text>
                    <Text>numberOfPlayers: {JSON.stringify(numberOfPlayers)}</Text>
                    <Text>roomName: {JSON.stringify(roomName)}</Text>


                    <Icon name='md-checkmark' />
                    <Icon name='ios-checkmark' />

                    <Button block rounded success style={styles.readyButton} onPress={handleSubmit}>
                        <Text>Ready</Text>
                    </Button>
                    <Button block rounded warning style={styles.readyButton} onPress={handleSubmit}>
                        <Text>Not Ready</Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}

export default WaitingRoom;
