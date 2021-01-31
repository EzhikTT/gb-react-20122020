import { DELETE_MESSAGE } from "../actions/message";
import { SUCCESS_CHATS_LOADING, START_CHATS_LOADING, ERROR_CHATS_LOADING, DELETE_CHAT} from '../actions/chat';

const init = {
    1: {
        name: 'Chat 1_Stor',
        messages: [0, 2, 3, 4]
    },
    2: {
        name: 'Chat 2_Stor',
        messages: [1, 5]
    },
    3: {
        name: 'Chat 3_Stor',
        messages: [8]
    },
    4: {
        name: 'Chat 4_Stor',
        messages: [6, 7]
    }
};

export default function(store = init, action){
    switch(action.type){
        case SUCCESS_CHATS_LOADING:
            return [...action.payload.entities.chats];
        case DELETE_MESSAGE:
            const chats = {...store};
            chats[action.chatId].messages = chats[action.chatId].messages.filter(id => id !== action.messageId);
            return {...chats};
        case DELETE_CHAT:
            const chats = {...store};
            delete chats[action.chatId];
            return {...chats};
        case START_CHATS_LOADING:
        case ERROR_CHATS_LOADING:
        default: 
            return store;
    };
}