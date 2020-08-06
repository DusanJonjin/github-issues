import React from 'react';
import { IssueDetails } from './IssueDetails';
import { IssueSummary } from './IssueSummary';
import { IssueComments } from './IssueComments';

export function IssueDetailsPage({ issues }) {


    return (
        <main id='issue-details-page'>
            <div id='issue-details-content-wrap'>
                <IssueDetails />
                <IssueSummary />
                <IssueComments />
            </div>
        </main>
    )
}
