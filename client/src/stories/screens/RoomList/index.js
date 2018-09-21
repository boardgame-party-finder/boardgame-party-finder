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
            tbn: '',
            pk: '',
            gameType: 'Family',
            name: 'Room Name 1',
            max: '6',
            min: '2'
        }, {
            tbn: '',
            pk: '',
            gameType: 'Negotiation',
            name: 'Room Name 2',
            max: '4',
            min: '2'
        }, {
            tbn: '',
            pk: '',
            gameType: 'Co-op',
            name: 'Room Name 3',
            max: '3',
            min: '2'
        }, {
            tbn: '',
            pk: '',
            gameType: 'Co-op',
            name: 'Room Name 4',
            max: '2',
            min: '2'
        }, {
            tbn: '',
            pk: '',
            gameType: 'Any',
            name: 'Room Name 5',
            max: '2',
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
                                <Text>{room.name} (1/{room.max})</Text>
                                <Text note>Type: {room.gameType}</Text>
                            </Body>
                            <Right>
                            <Button rounded success onPress={() => this.props.onJoinRoom()}>
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
