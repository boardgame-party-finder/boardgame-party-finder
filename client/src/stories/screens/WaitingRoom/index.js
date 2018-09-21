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
    Separator,
    Icon,
    List,
    ListItem,
    Card,
    CardItem
} from 'native-base';

import styles from './styles';
import { Field } from 'redux-form';
export interface Props {
    navigation: any;
    list: any;
    isReady: boolean;
    onBack: Function;
    onReady: Function;
}
export interface State { }
class WaitingRoom extends React.Component<Props, State> {
    componentDidUpdate(prevProps) {
        console.log(this.props)
        if (this.props.isReady) {
        }
    } 

    renderPlayerLists() {

    }

    render() {
        const { handleSubmit, valid } = this.props;
        const params = this.props.navigation.state.params || {};
        const gameType = params.gameType || 'Any';
        const location = params.location || 'Siam Center';
        const numberOfPlayers = params.numberOfPlayers || 4;
        const roomName = params.roomName || 'My room';

        return (
            <Container>
                <Header>
                    <Left>
                        <Button transparent onPress={() => this.props.onBack()}>
                            <Icon name="ios-arrow-back" />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Waiting Room</Title>
                    </Body>
                    <Right />
                </Header>
                <Content padder>
                    <Card>
                        <List>
                            <ListItem icon>
                                <Left><Icon active name="home" /></Left>
                                <Body><Text>{roomName}</Text></Body>
                            </ListItem>
                            <ListItem icon>
                                <Left><Icon active name="md-options" /></Left>
                                <Body><Text>{gameType}</Text></Body>
                            </ListItem>
                            <ListItem icon>
                                <Left><Icon active name="md-map" /></Left>
                                <Body><Text>{location}</Text></Body>
                            </ListItem>
                            <Separator bordered>
                                <Text>Players</Text>
                            </Separator>
                            <ListItem icon>
                                <Left>
                                    <Button style={styles.playerIconReady}><Icon active name="person" /></Button>
                                </Left>
                                <Body>
                                    <Text>Frowningstick</Text>
                                </Body>
                                <Right>
                                    <Text>Ready</Text>
                                    <Icon style={styles.readyStatus} active name="checkmark" />
                                </Right>
                            </ListItem>
                            <ListItem icon>
                                <Left>
                                    <Button style={styles.playerIconNotReady}><Icon active name="person" /></Button>
                                </Left>
                                <Body>
                                    <Text>Slumpfickle</Text>
                                </Body>
                                <Right>
                                </Right>
                            </ListItem>
                            <ListItem icon>
                                <Left>
                                    <Button style={styles.playerIconReady}><Icon active name="person" /></Button>
                                </Left>
                                <Body>
                                    <Text>CheeseclothAngel</Text>
                                </Body>
                                <Right>
                                    <Text>Ready</Text>
                                    <Icon style={styles.readyStatus} active name="checkmark" />
                                </Right>
                            </ListItem>
                            <ListItem icon>
                                <Left>
                                    <Button style={styles.playerIconReady}><Icon active name="person" /></Button>
                                </Left>
                                <Body>
                                    <Text>Icestoppers</Text>
                                </Body>
                                <Right>
                                    <Text>Ready</Text>
                                    <Icon style={styles.readyStatus} active name="checkmark" />
                                </Right>
                            </ListItem>                            
                            <ListItem icon>
                                <Left>
                                    <Button style={styles.playerIcon}><Icon active name="person" /></Button>
                                </Left>
                                <Body>
                                    <Text>Waiting for player...</Text>
                                </Body>
                                <Right>
                                    <Icon active name="timer" />
                                </Right>
                            </ListItem>
                            <ListItem icon>
                                <Left>
                                    <Button style={styles.playerIcon}><Icon active name="person" /></Button>
                                </Left>
                                <Body>
                                    <Text>Waiting for player...</Text>
                                </Body>
                                <Right>
                                    <Icon active name="timer" />
                                </Right>
                            </ListItem>
                        </List>
                    </Card>

                    <Button block rounded success={!this.props.isReady} danger={this.props.isReady} style={styles.submitButton} onPress={() => this.props.onReady()}>
                        <Text>{this.props.isReady ? 'Unready': 'Ready'}</Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}

export default WaitingRoom;
