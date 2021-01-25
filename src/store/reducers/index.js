import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router';

import messageReducer from './messages';
import chatReducer from './chat';

export default history => combineReducers({
    router: connectRouter(history),
    messageReducer,
    chats: chatReducer /// store.chats | store.getState().chats
});

 // store.getState() => {router: {....}, messageReducer: {....}, chats: {....}}