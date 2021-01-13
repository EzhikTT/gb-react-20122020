import React from 'react';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';

import {MuiThemeProvider} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Message from './Message.jsx';
import Example from './Example';
import MessageList from './MessageList';
import SendMessage from './SendMessage';
import Messages from './pages/Messages';

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

    componentDidUpdate(prevProps, prevState){
        console.log('componentWillUpdate');
        console.log(this.state.messages.length, this.state.messages.length % 2);
        if(prevState.messages.length < this.state.messages.lenght && 
            this.state.messages[this.state.messages.length - 1].author === 'me'){
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

    // componentWillUnmount(){
    //     clearTimeout(this.state.timeout);
    //     // clearInterval(this.state.interval);
    //     this.setState({timeout: null});
    //     // this.setState({interval: null});
    // }

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
        return <main>
                <BrowserRouter>
                    {/* <MessageList messages={this.state.messages}/> */}
                    {/* <Message text={this.state.text}/> */}
                    {/* <Example /> */}
                    {/* <SendMessage send={this.send}/> */}
                    <Grid container>
                        <Grid item xs={3}>
                            <Grid container direction='column'>
                                <Grid item><Link to='/chat/1'>Чат 1</Link></Grid>
                                <Grid item><Link to='/chat/2'>Чат 2</Link></Grid>
                                <Grid item><Link to='/chat/3'>Чат 3</Link></Grid>
                                <Grid item><Link to='/chat/4'>Чат 4</Link></Grid>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Switch>
                                <Route exact path="/" component={Messages}/>
                                <Route path="/chat/:chatId" render={obj => <Messages chatId={obj.match.params.chatId}/>}/>
                                {/* <Route path='/chat/2'><Messages chatId={2}/></Route> */}
                            </Switch>
                        </Grid>
                    </Grid>
                </BrowserRouter>
            </main> 
    }
}