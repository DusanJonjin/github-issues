import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { GitHubIssuesApp } from './Components/GitHubIssuesApp';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <React.StrictMode>
        <GitHubIssuesApp />
    </React.StrictMode>,
    document.getElementById('root')
);

serviceWorker.unregister();
