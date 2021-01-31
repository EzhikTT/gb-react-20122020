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