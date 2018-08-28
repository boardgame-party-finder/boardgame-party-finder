import React from 'react';
import Home from '../../../container/HomeContainer';
import Setting from '../../../container/SettingContainer';
import { TabNavigator } from 'react-navigation';
import {
    Button,
    Text,
    Icon,
    Footer,
    FooterTab,
} from 'native-base';
let MainScreenNavigator = TabNavigator(
    {
        Home: { screen: props => <Home {...props} /> },
        Setting: { screen: props => <Setting {...props} /> }
    },
    {
        tabBarPosition: 'bottom',
        tabBarComponent: props => {
            return (
                <Footer>
                    <FooterTab>
                        <Button
                            vertical
                            active={props.navigationState.index === 0}
                            onPress={() => props.navigation.navigate('Home')}
                        >
                            <Icon name="home" />
                            <Text>Home</Text>
                        </Button>
                        <Button
                            vertical
                            active={props.navigationState.index === 1}
                            onPress={() => props.navigation.navigate('Setting')}
                        >
                            <Icon name="settings" />
                            <Text>Setting</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            );
        }
    }
);
export default MainScreenNavigator;
