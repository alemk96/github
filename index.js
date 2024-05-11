import { Octokit } from "octokit";
import auth_key from './key.json' assert {type: "json"};

const octokit = new Octokit({
    auth: auth_key.git_key,
});

//request users
var users = await octokit.request('GET /users', {
    per_page: 100,
    headers: {
    'X-GitHub-Api-Version': '2022-11-28'
    }
})


var test_repo = users.data[0].repos_url

var dav = await octokit.request('GET /users/diogoeichert', {
    headers: {
    'X-GitHub-Api-Version': '2022-11-28'
    }
})

