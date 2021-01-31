import {SEND_MESSAGE, sendMessage} from '../actions/message';
export default store => next => action => {

    const dispatch = store.dispatch;
    const messages = store.getState().messageReducer;
    // debugger
    switch(action.type){
        case SEND_MESSAGE:
            if(action.author === 'me'){
                console.log('need send');
                setTimeout(
                    () => dispatch(sendMessage('I\'m robot', 'robot', action.chatId)),
                    1000
                );
            }
            break;
    }
    return next(action);
};

/**
 * function (store) {
 *   return function(next) {
 *     return function(action){
 *     }; 
 *   };
 * }
 */