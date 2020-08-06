import React from 'react';
import { UserDetails, IssueNumber, TimeAgo, IssueStatus, IssueTitle, IssueLabels } from '../- Joint components -/AllJointComponents';
//import './Styles/Issue.css'

export function Issue({ issue }) {

    const {
        user,
        number,
        state,
        created_at,
        comments,
        title,
        labels
    } = issue;

    return (
        <div className='issue_wrap_all'>
            <UserDetails userImage={user.avatar_url}
                         userName={user.login} />
            <div className='issue_text_wrap'>
                <div className='issue_wrap_up'>
                    <div className='issue_wrap_left'>
                        <IssueNumber issueNumber={number} />
                        <IssueStatus status={state + 'ed'} />
                        <TimeAgo time={created_at} />
                    </div>
                    {comments > 0 &&
                    <div className='issue_wrap_right'>
                        <img src={require('../../Images/comment.png')} alt='comment_icon' />
                        {comments}
                    </div>
                    }
                </div>
                <div className='issue_wrap_down'>
                    
                        <IssueTitle title={title} />
                    
                    <IssueLabels labels={labels} />
                </div>
            </div>
        </div>
    );
}