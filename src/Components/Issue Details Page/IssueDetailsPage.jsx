import React, { useEffect, useState } from 'react';
import { IssueDetails } from './IssueDetails';
import { IssueSummary } from './IssueSummary';
import { IssueComments } from './IssueComments';
import { getIssueComments } from '../../Api/api';
import { Link, useLocation } from 'react-router-dom';
import './Styles/IssueDetailsPage.css';

export function IssueDetailsPage({ issues }) {

    const location = useLocation();

    const { state } = location;

    const { issueNumber } = state;

    const [issueComments, setIssueComments] = useState([]);

    const chosenIssue = issues && issues.filter(issue => issue.number === issueNumber)[0];

    const commentsExist = chosenIssue && chosenIssue.comments > 0;

    useEffect(() => {
        if (chosenIssue && commentsExist) {
            getIssueComments(chosenIssue.comments_url).then(res => 
                setIssueComments(res))
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <main id='issue-details-page'>
            <Link className='link' to={{pathname: '/'}}>
                    <p className='back'>&lsaquo; Back to all Issues</p>
            </Link>
            <div id='issue-details-content-wrap'>
                <IssueDetails chosenIssue={chosenIssue}/>
                <IssueSummary body={chosenIssue.body}/>
                <IssueComments commentsArray={issueComments}
                               commentsNum={chosenIssue.comments} />
            </div>
        </main>
    )
}
