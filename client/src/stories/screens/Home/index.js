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
    View
} from 'native-base';

import styles from './styles';
export interface Props {
    navigation: any;
    list: any;
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
                    <View style={{ alignItems: 'center', paddingTop: 80 }}>
                        <Thumbnail square large source={{ uri: 'https://png.icons8.com/metro/1600/dice.png' }} />
                        <Text style={styles.text}>Board Game Party Finder</Text>
                        <View style={styles.button}>
                            <Button onPress={() => this.props.navigation.navigate('CreateRoom')}>
                                <Text>Create Room</Text>
                            </Button>
                        </View>
                        <View style={styles.button}>
                            <Button onPress={() => this.props.navigation.navigate('BlankPage')}>
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
