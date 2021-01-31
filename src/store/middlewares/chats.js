import { DELETE_CHAT } from '../actions/chat';
import {deleteMessage} from '../actions/message';
export default store => next => action => {
    const dispatch = store.dispatch;
    const chats = strore.getState().chatsReducer;
    switch(action.type){
        case DELETE_CHAT:
            for(let id of chats[action.chatId].messages){
                dispatch(deleteMessage(id, action.chatId));
            }
            break;
    }
    return next(action);
};