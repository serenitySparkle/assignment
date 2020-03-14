import React from 'react';
import ReactDOM from 'react-dom'
import App from './App';
import {configureStore} from './configureStore'
import registerServiceWorker from './serviceWorker'
import {Provider} from 'react-redux'
import './index.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

const store = configureStore([]);

ReactDOM.render(<Provider store={store}> <App /></Provider>, document.getElementById('root'));

registerServiceWorker();
