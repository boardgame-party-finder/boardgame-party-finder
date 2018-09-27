// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import Home from '../../stories/screens/Home';
import datas from './data';
import { fetchList } from './actions';
export interface Props {
	navigation: any,
	fetchList: Function,
	data: Object,
}
export interface State {}
class HomeContainer extends React.Component<Props, State> {
	render() {
		return <Home navigation={this.props.navigation} userName={this.props.userName} />;
	}
}

function bindAction(dispatch) {
	return {
		fetchList: url => dispatch(fetchList(url)),
	};
}

const mapStateToProps = state => ({
	data: state.homeReducer.list,
	isLoading: state.homeReducer.isLoading,
	userName: state.loginReducer.userName
});
export default connect(mapStateToProps, bindAction)(HomeContainer);