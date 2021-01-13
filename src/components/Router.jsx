import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Messages from './pages/Messages';

export default class Router extends React.Component {
    render() {
        return <Switch>
            <Route exact path="/" component={Messages}/>
            <Route path="/chat/:chatId" render={obj => <Messages chatId={obj.match.params.chatId}/>}/>
        </Switch>;
    }
}