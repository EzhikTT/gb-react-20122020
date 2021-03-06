import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import MessageList from '../MessageList';
import SendMessage from '../SendMessage';

import {sendMessage, setMessages} from '../../store/actions/message';

class Messages extends React.Component {
    state = {
        messages: [
            {message: 'message 0', author: 'robot', id: 0},
            {message: 'message 1', author: 'robot', id: 1},
            {message: 'message 2', author: 'robot', id: 2},
            {message: 'message 3', author: 'robot', id: 3},
            {message: 'message 4', author: 'robot', id: 4},
            {message: 'message 5', author: 'robot', id: 5},
            {message: 'message 6', author: 'robot', id: 6},
            {message: 'message 7', author: 'robot', id: 7},
            {message: 'message 8', author: 'robot', id: 8}
        ],
        chats: {
            1: {
                name: 'Chat 1',
                messages: [0, 2, 3, 4]
            },
            2: {
                name: 'Chat 2',
                messages: [1, 5]
            },
            3: {
                name: 'Chat 3',
                messages: [8]
            },
            4: {
                name: 'Chat 4',
                messages: [6, 7]
            }
        }
    };
    
    static propTypes = {
        chatId: PropTypes.number
    };

    static defaultProps = {
        chatId: 1
    };

    send = objMsg => {
        const newMesId = this.state.messages.length;
        this.setState({messages: [...this.state.messages, {...objMsg, id: newMesId}]});
        
        this.props.sendMessage(objMsg.message, objMsg.author, this.props.chatId);

        const chats = {...this.state.chats};
        chats[this.props.chatId].messages.push(newMesId);
        // debugger
        this.setState({chats: {...chats}});
    };

    componentDidUpdate(prevProps, prevState) {
        if(prevProps.messagesStore.length < this.props.messagesStore.length && 
            this.props.messagesStore[this.props.messagesStore.length - 1].author === 'me'){
                setTimeout(
                    () => this.send({message: 'I\'m robot', author: 'robot'}),
                    1000
                );
        }
    }

    componentDidMount(){
        // fetch('api/chats.json').then(response => response.json()).then(response => {
        //     console.log('response', response);

        //     let chats = {};
        //     let messages = [];
        //     for(let id in response){
        //         chats[parseInt(id)]= {
        //             name: response[id].name,
        //             messages: [...response[id].messages.map(item => parseInt(item.id))]
        //         };
        //         messages.push(...response[id].messages.map(item => ({...item, id: parseInt(item.id)})));
        //     }
        //     this.props.setMessages(messages);
        //     this.setState({chats: {...chats}});

        // }).catch(err => console.log('err', err)); 
        
        (async () => {
            try{
                let response = await fetch('api1/chats.json'); // первый then()
                response = await response.json(); // второй then()

                let chats = {};
                let messages = [];
                for(let id in response){
                    chats[parseInt(id)]= {
                        name: response[id].name,
                        messages: [...response[id].messages.map(item => parseInt(item.id))]
                    };
                    messages.push(...response[id].messages.map(item => ({...item, id: parseInt(item.id)})));
                }


                this.props.setMessages(messages);
                this.setState({chats: {...chats}});

                // throw new Error({err: true, msg: 'error'});

            }
            catch(e){
                console.log('try -> catch', e);
            }
        })();
    }

    render() {
        // Если messages - словарь, то фильтрация другая: this.state.chats[this.props.chatId].messages.map(item => this.state.messages[item])
        return <>
            <h2>{this.state.chats[this.props.chatId].name}</h2>
            <MessageList messages={this.props.messagesStore.filter(({id}) => this.state.chats[this.props.chatId].messages.includes(id))}/>
            <SendMessage send={this.send}/>
        </>;
    }
}

const mapStateToProps = store => ({
    messagesStore: store.messageReducer,
    chatsStore: store.chats 
});

const mapDispatchToProps = {
    sendMessage: sendMessage,
    setMessages: setMessages
};

export default connect(mapStateToProps, mapDispatchToProps)(Messages);