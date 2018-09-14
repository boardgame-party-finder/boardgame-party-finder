// @flow
import React from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
import { Root, Footer, FooterTab, Button, Icon, Text } from 'native-base';
import Login from './container/LoginContainer';
import Home from './container/HomeContainer';
import BlankPage from './container/BlankPageContainer';
import CreateRoom from './container/CreateRoomContainer';
import WaitingRoom from './container/WaitingRoomContainer';
import MainScreenNavigator from './stories/screens/Tab';

const App = StackNavigator(
	{
		Login: { screen: Login },
		BlankPage: { screen: BlankPage },
		MainScreenNavigator: { screen: MainScreenNavigator },
		CreateRoom: { screen: CreateRoom },
		WaitingRoom: { screen: WaitingRoom }
	},
	{
		initialRouteName: 'WaitingRoom',
		// initialRouteName: 'Login',
		headerMode: 'none',
	}
);

export default () => (
	<Root>
		<App />
	</Root>
);