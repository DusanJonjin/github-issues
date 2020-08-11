import React from 'react';
import { FakeIssue } from './FakeIssue';

export function FakeIssuesList() {

    const array = [...Array(20).keys()];

    const randomInteger = (min, max) => (
        Math.floor(Math.random() * (max - min) + min)
    );
        
    
    const fakeList = array.map(num => 
        <li key={num}>
            <FakeIssue />
        </li>
    );

    return (
        <section className='issues-list'>
            <h2>{randomInteger(100, 1000)} open issues for :org/:repo </h2>
            <ol>
                {fakeList}
            </ol>
        </section>
    );
}