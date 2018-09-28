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
    roomList: Array;
}
export interface State { }
class RoomList extends React.Component<Props, State> {
    render() {
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
                    <List dataArray={this.props.roomList}
                        renderRow={(room) => {
                            if (room.inusers.length === 1) return null;
                            return <ListItem>
                                <Body>
                                    <Text>{room.name ? room.name : 'Just for Fun !!'} ({room.inusers ? room.inusers.length - 1 : 0}/{room.max})</Text>
                                    <Text note>Type: {room.gametype ? room.gametype : 'Any'}</Text>
                                </Body>
                                <Right>
                                    <Button rounded success onPress={() => this.props.onJoinRoom(room)}>
                                        <Text>Join</Text>
                                    </Button>
                                </Right>
                            </ListItem>
                        }
                        }>
                    </List>
                    </Card>
                </Content>
            </Container>
        );
    }
}

export default RoomList;
