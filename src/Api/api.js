export const getAllData = async (org, repo, pageNum) => {
    try {
        const getOrgRepo = await fetch(`https://api.github.com/repos/${org}/${repo}`);
        const orgRepo = await getOrgRepo.json();

        if (orgRepo.message) return orgRepo;

        const getIssues = await fetch(`https://api.github.com/repos/${org}/${repo}/issues?per_page=20&page=${pageNum}`);
        const issues = await getIssues.json();

        orgRepo.issues = issues;

        return orgRepo;
        
        /**** We map issues array and attach open issues count and
        comments array (if issue has comments) property to it:

        const allIssuesData = issues.map(async issue => {
            issue.open_issues_count = open_issues_count;
            if (issue.comments > 0) {
                const getIssueComments = await fetch(issue.comments_url);
                const issueComments = await getIssueComments.json();
                issue.comments_array = issueComments;
            }
            return issue;
        }) 

        We need to wrap them all as one promise with
        promise.all, because we got back array of promises: 

        const result = Promise.all(allIssuesData)
        return result;

        - Dropped this solution 'cause of the limitation of api calls ****/
    }

    catch (err) {
        console.log('Error', err)
    }
}

export const getIssueComments = async commentsUrl => {
    const getComments = await fetch(commentsUrl);
    const comments = await getComments.json();
    return comments;
} 
    
    
