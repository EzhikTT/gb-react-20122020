import React from 'react';
import PropTypes from 'prop-types';

import MessageList from '../MessageList';
import SendMessage from '../SendMessage';

export default class Messages extends React.Component {
    state = {
        messages: []
    };
    
    static propTypes = {
        chatId: PropTypes.number
    };

    static defaultProps = {
        chatId: -1
    };

    send = objMsg => {
        this.setState({messages: [...this.state.messages, objMsg]});
    };

    render() {
        return <>
            <h2>{this.props.chatId}</h2>
            <MessageList messages={this.state.messages}/>
            <SendMessage send={this.send}/>
        </>;
    }
}