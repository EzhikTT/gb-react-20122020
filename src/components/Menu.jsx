import React from 'React';
import Grid from '@material-ui/core/Grid';
import {push} from 'connected-react-router';
import { connect } from 'react-redux';

class Menu extends React.Component {
    render() {
        return <div><Grid container direction='column'>
            <Grid item><span onClick={() => this.props.push('/chat/1')}>Чат 1</span></Grid>
            <Grid item><span onClick={() => this.props.push('/chat/2')}>Чат 2</span></Grid>
            <Grid item><span onClick={() => this.props.push('/chat/3')}>Чат 3</span></Grid>
            <Grid item><span onClick={() => this.props.push('/chat/4')}>Чат 4</span></Grid>
        </Grid></div>;
    }
}

const mapStateToProps = store => ({});
const mapDispatchToProps = {
    push
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);