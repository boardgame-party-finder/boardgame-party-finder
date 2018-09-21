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
}
export interface State { }
class RoomList extends React.Component<Props, State> {
    renderPlayerLists() {

    }

    render() {
        const { handleSubmit, valid } = this.props;
        const params = this.props.navigation.state.params || {};
        const gameType = params.gameType || 'Any';
        const location = params.location || 'Siam Center';
        const numberOfPlayers = params.numberOfPlayers || 4;
        const roomName = params.roomName || 'My room';

        const rooms = [{
            tbn: 'room',
            pk: '',
            gameType: '',
            name: 'room Name',
            max: '',
            min: ''
        }];

        return (
            <Container>
                <Header>
                    <Left>
                        <Button transparent onPress={() => this.props.navigation.goBack()}>
                            <Icon name="ios-arrow-back" />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Room List</Title>
                    </Body>
                    <Right />
                </Header>
                <Content padder>
                    <Card>
                    <List dataArray={rooms}
                        renderRow={(room) =>
                        <ListItem avatar>
                            <Left />
                            <Body>
                            <Text>{room.name}</Text>
                            <Text note>Doing what you like will always keep you happy . .</Text>
                            </Body>
                            <Right>
                            <Text note>3:43 pm</Text>
                            </Right>
                        </ListItem>
                        }>
                    </List>




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
                        </List>
                    </Card>
                </Content>
            </Container>
        );
    }
}

export default RoomList;
