import {createStore, applyMiddleware, compose} from 'redux';
import {createBrowserHistory} from 'history';
import {routerMiddleware} from 'connected-react-router'
import reducers from './reducers';
import middlewares from './middlewares';

export const history = createBrowserHistory();

export default function initStore() {
    const store = createStore(
        reducers(history), 
        {}, 
        compose(
            applyMiddleware(routerMiddleware(history), ...middlewares),
            window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : () => {}
        )
    );

    store.subscribe(() => console.log(store.getState()));

    return store;
};