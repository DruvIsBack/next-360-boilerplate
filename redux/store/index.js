import createStoreFromServer from "./serverStore";
import createStoreFromClient from "./clientStore";

export const _initialState = {
    status: {loaded: false, count: 0}
};

export function initializeStore(initialState = _initialState) {

    const isServer = (typeof window === 'undefined');
    if (isServer) {
        return createStoreFromServer(initialState);
    } else {
        return createStoreFromClient(initialState);
    }
}
