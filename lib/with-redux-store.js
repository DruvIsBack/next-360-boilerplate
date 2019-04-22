import React from 'react'
import {initializeStore} from '../redux/store';

function getOrCreateStore() {
    return initializeStore()
}

export default App => {
    return class AppWithRedux extends React.Component {
        constructor(props) {
            super(props);
            this.reduxStore = getOrCreateStore(props.initialReduxState)
        }

        static async getInitialProps(appContext) {
            // Get or Create the store with `undefined` as initialState
            // This allows you to set a custom default initialState
            const reduxStore = getOrCreateStore();

            // Provide the store to getInitialProps of pages
            appContext.ctx.reduxStore = reduxStore;

            let appProps = {};
            if (typeof App.getInitialProps === 'function') {
                appProps = await App.getInitialProps(appContext)
            }

            return {
                ...appProps,
                initialReduxState: reduxStore.getState()
            }
        }

        render() {
            return <App {...this.props} reduxStore={this.reduxStore}/>
        }
    }
}
