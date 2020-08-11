import React from 'react';
import { Issue } from './Issue';
import './Styles/IssuesList.css';


export function IssuesList({ issues, fullName, openIssuesNum, pageNum }) {


    const allIssues = issues.map(issue => 
        <li key={issue.id}>
            <Issue issue={issue}
                   fullName={fullName}
                   pageNum={pageNum} />
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
