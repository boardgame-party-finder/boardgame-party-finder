import * as React from 'react';
import {
    Container,
    Header,
    Title,
    Content,
    Text,
    Button,
    Body,
    Right,
    Thumbnail,
    View,
    Icon,
} from 'native-base';

import styles from './styles';
export interface Props {
    navigation: any;
    userName: string;
}
export interface State { }
class Home extends React.Component<Props, State> {
    render() {
        return (
            <Container style={styles.container}>
                <Header>
                    <Body>
                        <Title>Home</Title>
                    </Body>
                    <Right />
                </Header>
                <Content>
                    <View style={{ alignItems: 'center', paddingTop: 40 }}>
                        <Icon name="md-contacts" style={{ fontSize: 150 }} />
                        <Text style={styles.text}>Board Game Party Finder</Text>
                        <Text style={styles.text}>Welcome {this.props.userName}!</Text>
                        <View style={styles.button} padder>
                            <Button block onPress={() => this.props.navigation.navigate('CreateRoom')}>
                                <Text>Create Room</Text>
                            </Button>
                        </View>
                        <View style={styles.button} padder>
                            <Button block onPress={() => this.props.navigation.navigate('RoomList')}>
                                <Text>Join Room</Text>
                            </Button>
                        </View>
                    </View>

                    {/* <List>
            {this.props.list.map((item, i) => (
              <ListItem
                key={i}
                onPress={() =>
                  this.props.navigation.navigate('BlankPage', {
                    name: { item }
                  })}
              >
                <Text>{item}</Text>
              </ListItem>
            ))}
          </List> */}
                </Content>
            </Container>
        );
    }
}

export default Home;
