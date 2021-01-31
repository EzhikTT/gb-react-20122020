import {RSAA, getJSON} from 'redux-api-middleware';
import {normalize} from 'normalizr';

import {chats} from '../../lib';

export const START_CHATS_LOADING = 'START_CHATS_LOADING';
export const SUCCESS_CHATS_LOADING = 'SUCCESS_CHATS_LOADING';
export const ERROR_CHATS_LOADING = 'ERROR_CHATS_LOADING';
export const loadChats = () => ({
    [RSAA]: {
        endpoint: '/api/chats.json',
        method: 'GET',
        types: [
            START_CHATS_LOADING,
            {
                type: SUCCESS_CHATS_LOADING,
                payload: (action, state, res) => getJSON(res).then(json => normalize(json, [chats]))
            },
            ERROR_CHATS_LOADING
        ]
    }
});

export const DELETE_CHAT = 'DELETE_CHAT';
export const deleteChat = (chatId) => ({
    type: DELETE_CHAT,
    chatId
});