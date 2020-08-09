import React from 'react';
import { Issue } from './Issue';
import './Styles/IssuesList.css';


export function IssuesList({ issues, fullName, openIssuesNum }) {


    const allIssues = issues.map(issue => 
        <li key={issue.id}>
            <Issue issue={issue}
                   fullName={fullName} />
        </li>
    );

    return (
        <section className='issues-list'>      
            <React.Fragment>
                <h2> {openIssuesNum} open issues for {fullName} </h2>
                <ol>
                    {allIssues}
                </ol>             
            </React.Fragment>                    
        </section>
    )
}
