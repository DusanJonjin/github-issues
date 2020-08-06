import React from 'react';
import { FakeIssue } from './FakeIssue';

export function FakeIssuesList() {

    const array = [...Array(20).keys()];

    const fakeList = array.map(num => 
        <li key={num}>
            <FakeIssue />
        </li>
    );

    return (
        <section className='issues-list'>
            <h2>Open issues for: CURRENT ISSUES</h2>
            <ul>
                {fakeList}
            </ul>
        </section>
    );
}