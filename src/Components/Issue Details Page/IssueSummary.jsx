import React from 'react';
import ReactMarkdown from 'react-markdown'; 

export function IssueSummary({ body }) {

     return (
        <section id='summary'>
            <ReactMarkdown source={body}
                           className='markdown' />
        </section>
    );
}
