import {RSAA, getJSON} from 'redux-api-middleware';

export const SEND_MESSAGE = 'SEND_MESSAGE';
export const sendMessage = (message, author, chatId) => ({
    type: SEND_MESSAGE,
    message,
    author,
    chatId
});

export const SET_MESSAGES = 'SET_MESSAGES';
export const setMessages = messages => ({
    type: SET_MESSAGES,
    messages
});

export const START_MESSAGES_LOADING = 'START_MESSAGES_LOADING';
export const SUCCESS_MESSAGES_LOADING = 'SUCCESS_MESSAGES_LOADING';
export const ERROR_MESSAGES_LOADING = 'ERROR_MESSAGES_LOADING';
export const loadMessages = () => ({
    [RSAA]: {
        endpoint: 'api/chats.json',
        method: 'GET',
        types: [
            START_MESSAGES_LOADING,
            {
                type: SUCCESS_MESSAGES_LOADING,
                payload: (action, state, res) => getJSON(res).then(json => json)
            },
            ERROR_MESSAGES_LOADING
        ]
    }
});

export const DELETE_MESSAGE = 'DELETE_MESSAGE';
export const deleteMessage = (messageId, chatId) => ({
    type: DELETE_MESSAGE,
    messageId,
    chatId
});