import {apiMiddleware} from 'redux-api-middleware';

import messagesMiddleware from './messages';
import chatsMiddleware from './chats';

export default [apiMiddleware, chatsMiddleware, messagesMiddleware];