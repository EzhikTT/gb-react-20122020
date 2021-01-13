import React from 'react';
import PropTypes from 'prop-types';

// import {TextField} from 'material-ui';
// import TextField from 'material-ui/TextField';
// import Button from 'material-ui/RaisedButton';

// const useStyles = makeStyles((theme) => ({
//     root: {
//       '& .MuiTextField-root': {
//         margin: theme.spacing(1),
//         width: '25ch',
//       },
//       '& > *': {
//           margin: theme.spacing(1),
//         },
//     },
//   }));

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));

export default class SendMessage extends React.Component {
    state = {
        message: ''
    };

    static propTypes = {
        send: PropTypes.func.isRequired
    };

    send = (event) => {
        //event.preventDefault();
        this.props.send({message: this.state.message, author: 'me'});
        this.setState({message: ''});
    };

    handleChange = event => this.setState({message: event.target.value});

    render() {
        // const classes = useStyles();
        return <div>
            {this.state.message}
            {/* <TextField 
                       value={this.state.message}
                       onChange={this.handleChange} 
                    //    fullWidth={true}
                    multiLine
                    //    rows={5}
                       name={'message'}
                    /> */}
            <input
                // id="standard-multiline-flexible"
                // label="Multiline"
                // multiline
                // rowsMax={4}
                value={this.state.message}
                onChange={event => this.setState({message: event.target.value})}
                />
            <span onClick={this.send}>Send</span>
        </div>;
    }
}