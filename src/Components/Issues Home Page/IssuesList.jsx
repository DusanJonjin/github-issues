import React from 'react';
import { Issue } from './Issue';
import { Pagination } from './Pagination';

export function IssuesList(issues) {

    const issuesExist = Array.isArray(issues);

    const allIssues = issuesExist && issues.map(issue => 
        <li key={issue.id}>
            <Issue issue={issue} />
        </li>
    );

    return (
        <section>
            { issuesExist ?
            <React.Fragment>
                <h2> open issues for</h2>
                <ol>
                    {allIssues}
                </ol>
                <Pagination />
            </React.Fragment>          
          : <p>No</p>
            }
        </section>
    )
}
