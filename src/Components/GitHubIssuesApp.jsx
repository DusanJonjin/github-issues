import React from 'react';
import { IssuesHomePage } from './Issues Home Page/IssuesHomePage';
import { IssueDetailsPage } from './Issue Details Page/IssueDetailsPage';
import { Switch, Route } from 'react-router-dom';

export function GitHubIssuesApp() {
    
    return (
        <React.Fragment>
            <Switch>
                <Route exact path='/'>
                    <IssuesHomePage />
                </Route>
                <Route path='/issue_:issueNumber'>
                    <IssueDetailsPage />
                </Route>
            </Switch>
        </React.Fragment>
    )
}
