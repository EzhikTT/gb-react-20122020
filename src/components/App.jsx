import React from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Message from './Message.jsx';
import Example from './Example';
import MessageList from './MessageList';
import SendMessage from './SendMessage';

import '../styles/App.css';

export default class App extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            text: 'Some text from state',
            timeout: null,
            messages: [],
            interval: null
        };
    }

    // componentDidMount(){
    //     console.log('componentDidMount');
    //     // const timeout = setTimeout(
    //     //     () => {
    //     //         this.setState({messages: [...this.state.messages, 'I do not answer you. I am robot']});
    //     //     },
    //     //     500
    //     // );
    //     // const interval = setInterval(
    //     //     () => {
    //     //         this.setState({messages: [...this.state.messages, 'How are you?']});
    //     //         setTimeout(
    //     //             () => this.setState({messages: [...this.state.messages, 'I do not answer you. I am robot']}),
    //     //             1000
    //     //         );
    //     //     },
    //     //     2000
    //     // );
    //     // this.setState({timeout});
    //     // this.setState({interval});
    //     // fetch()....then(res => { ...... this.setState(...) })
    // }

    componentDidUpdate(){
        console.log('componentWillUpdate');
        console.log(this.state.messages.length, this.state.messages.length % 2);
        if(this.state.messages.length % 2 > 0){
            // console.log();
            const timeout = setTimeout(
                () => {
                    this.setState({messages: [...this.state.messages, {message: 'I do not answer you. I am robot', author: 'robot'}]});
                    this.setState({timeout});
                },
                2000
            );
            // this.setState({timeout});
        }
    }

    componentWillUnmount(){
        clearTimeout(this.state.timeout);
        // clearInterval(this.state.interval);
        this.setState({timeout: null});
        // this.setState({interval: null});
    }

    send = objMsg => {
        this.setState({messages: [...this.state.messages, objMsg]});
        // const timeout = setTimeout(
        //     () => {
        //         this.setState({messages: [...this.state.messages, {message: 'I do not answer you. I am robot', author: 'robot'}]});
        //     },
        //     1000
        // );
        // this.setState({timeout});
    };

    render() {
        console.log('render');
        return <MuiThemeProvider>
            <main>
                <MessageList messages={this.state.messages}/>
                {/* <Message text={this.state.text}/> */}
                {/* <Example /> */}
                <SendMessage send={this.send}/>
            </main> 
        </MuiThemeProvider>;
    }
}