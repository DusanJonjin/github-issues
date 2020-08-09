import React, { useState, useEffect } from 'react';
import { Navbar } from './Navbar/Navbar';
import { IssuesHomePage } from './Issues Home Page/IssuesHomePage';
import { IssueDetailsPage } from './Issue Details Page/IssueDetailsPage';
import { FakeIssues } from '../Components/Issues Home Page/FakeIssues';
import { getAllData } from '../Api/api';
import { Switch, Route, useLocation, Link } from 'react-router-dom';

export function GitHubIssuesApp() {

    const location = useLocation();

    const { pathname, state } = location;

    const isHomeUrl = pathname === '/';

    const homeOrgRepo = {org: 'facebook', repo: 'react'}

    //Set these values as default on first render or pages refresh:
    const urlOrgRepo = () => {
        if (isHomeUrl) return homeOrgRepo;
        if (!state) return {org:'', repo: ''};
        const { issueNumber, pageNumber, url, ...orgRepo } = state;
        return orgRepo;
    }

    const [orgRepoValue, setOrgRepoValue] = useState(urlOrgRepo());

    const { org , repo } = orgRepoValue;


    const [allData, setAllData] = useState({});

    const { issues, full_name, open_issues_count } = allData;


    const handleBackHomeClick = () => {
        setOrgRepoValue(homeOrgRepo);
        setAllData({});
    };

    useEffect(() => {
        getAllData(org , repo, '1').then(res =>
            setAllData(res),
            )
    }, [org, repo]);

    const allDataExists = Object.keys(allData).length > 2;

    if (!allDataExists) {
        if (allData.message) return (
            <React.Fragment>
                <Navbar />
                <div>{allData.message}</div>
                <Link to='/' onClick={handleBackHomeClick}>Back to home page</Link>
            </React.Fragment>
        );
        else return (
            <React.Fragment>
                <Navbar />
                {isHomeUrl ?
                    <FakeIssues />
                  : <div>Loading Issue...</div>
                }
            </React.Fragment>
        );    
    }
    else return (
        <React.Fragment>
            <Navbar />
            <Switch>
                <Route exact path='/'>
                    <IssuesHomePage issues={issues}
                                    fullName={full_name}
                                    openIssuesNum={open_issues_count} />
                </Route>
                <Route path='/issue_:issueNum' >
                    <IssueDetailsPage issues={issues} />
                </Route>
            </Switch>
        </React.Fragment>
    );
}
