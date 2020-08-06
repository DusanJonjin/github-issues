import React from 'react';
import { IssueComment } from './IssueComment';

export function IssueComments({ commentsArray }) {

    if (commentsArray && commentsArray.length > 0) {
        const comments = commentsArray.map(comm => 
            <IssueComment key={comm.id}
                          comment={comm} />
        );
    
        return (
            <section id='issue-comments'>
                <ol>
                    {comments}
                </ol>
            </section>
        );
    }

    else {
        return (
            <p>No comments</p>
        );
    }
}
