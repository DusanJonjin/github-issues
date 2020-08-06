import React from 'react';
import { IssuesHomePage } from './Issues Home Page/IssuesHomePage';
import { IssueDetailsPage } from './Issue Details Page/IssueDetailsPage';

export function GitHubIssuesApp() {
    
    return (
        <React.Fragment>
            <IssuesHomePage />
            <IssueDetailsPage />
        </React.Fragment>
    )
}
