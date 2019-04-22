import {applyMiddleware, createStore} from 'redux';
import reducers from "../reducers";
import storage from "localforage";
import {persistReducer, persistStore} from "redux-persist";
import {composeWithDevTools} from 'redux-devtools-extension';
import createEncryptor from 'redux-persist-transform-encrypt';


const encryptor = createEncryptor({
    secretKey: 'a<Z-%w"Pj6G9qMY}',
    onError: function (error) {
        alert("P2P Encryption can't applied on the App. Please reload again.")
    }
});

const persistConfig = {
    key: 'root',
    storage: storage,
    transforms: [encryptor]
};


const persistedReducer = persistReducer(persistConfig, reducers);


export default (initialState) => {
    console.log(initialState);
    const store = createStore(persistedReducer, initialState, composeWithDevTools(applyMiddleware()));

    persistStore(store);
    return store;
}
