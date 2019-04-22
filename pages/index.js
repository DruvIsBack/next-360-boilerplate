import React, {Fragment} from 'react';
import {connect} from 'react-redux';
import {dataCount} from './../redux/actions';

class Index extends React.Component {
    static getInitialProps({reduxStore, req}) {
        const isServer = !!req;
        reduxStore.dispatch(dataCount());
        return {}
    }

    componentDidMount() {
        this.timer = setInterval(() => this.props.dataCount(), 1000)
    }

    componentWillUnmount() {
        clearInterval(this.timer)
    }

    render() {
        return <Fragment>Hii</Fragment>
    }
}

const mapDispatchToProps = {dataCount};
export default connect(
    null,
    mapDispatchToProps
)(Index)
