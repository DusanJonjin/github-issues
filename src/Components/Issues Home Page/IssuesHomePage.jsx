import React, { useRef } from 'react';
import { IssuesList } from './IssuesList';
import './Styles/IssuesHomePage.css';

export function IssuesHomePage({ issues, fullName, openIssuesNum, handleSearchSubmit }) {

    const inputValue = useRef(null);

    return (
        <main id='issues-home-page'>
            <form onSubmit={e => handleSearchSubmit(e, inputValue.current.value)}>
                <input type='search' 
                       placeholder='Enter :org/:repo (e.g., github/hub)'
                       ref={inputValue} />
                <input type='submit' value='Search' />
            </form>
            <IssuesList issues={issues}
                        fullName={fullName}
                        openIssuesNum={openIssuesNum}
            />
        </main>
    )
}
