import React from 'react';
import { IssueDetails } from './IssueDetails';
import { IssueSummary } from './IssueSummary';
import { IssueComments } from './IssueComments';
import { Link } from 'react-router-dom';

export function IssueDetailsPage({ issues }) {


    return (
        <main id='issue-details-page'>
            <div id='issue-details-content-wrap'>
                <Link className='link' to='/'>
                    <p className='back'>&lsaquo; Back to all Issues</p>
                </Link>
                <IssueDetails />
                <IssueSummary />
                <IssueComments />
            </div>
        </main>
    )
}
