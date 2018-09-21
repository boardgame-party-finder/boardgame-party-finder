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

        // Backend did not support location
        const rooms = [{
            gameType: 'Family',
            roomName: 'Room Name 1',
            numberOfPlayers: '2',
            max: '6',
            min: '2'
        }, {
            gameType: 'Negotiation',
            roomName: 'Room Name 2',
            numberOfPlayers: '4',
            max: '4',
            min: '2'
        }, {
            gameType: 'Co-op',
            roomName: 'Room Name 3',
            numberOfPlayers: '2',
            max: '3',
            min: '2'
        }, {
            gameType: 'Co-op',
            roomName: 'Room Name 4',
            numberOfPlayers: '1',
            max: '2',
            min: '2'
        }, {
            gameType: 'Any',
            roomName: 'Room Name 5',
            numberOfPlayers: '5',
            max: '6',
            min: '2'
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
                        <ListItem>
                            <Body>
                                <Text>{room.roomName} ({room.numberOfPlayers}/{room.max})</Text>
                                <Text note>Type: {room.gameType}</Text>
                            </Body>
                            <Right>
                            <Button rounded success onPress={() => this.props.onJoinRoom(room)}>
                                <Text>Join</Text>
                            </Button>
                            </Right>
                        </ListItem>
                        }>
                    </List>
                    </Card>
                </Content>
            </Container>
        );
    }
}

export default RoomList;
