import React, { useRef } from 'react';
import { IssuesList } from './IssuesList';
import  { FakeIssuesList } from './FakeIssuesList'

export function IssuesHomePage() {

    const inputValue = useRef(null);

    return (
        <main>
            <form>
                <input type='search' 
                       placeholder='Enter :org/:repo (e.g., github/hub)'
                       ref={inputValue} />
                <input type='submit' value='Search' />
            </form>
            <FakeIssuesList /> 
            <IssuesList />
        </main>
    )
}
