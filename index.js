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

//console.log(users.data[1])

var repo = await octokit.request('GET /users/{username}/repos', {
    username: 'mojombo',
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
<<<<<<< HEAD
  })
console.log(repo.data[0]);
=======
})


console.log(userRepo.data)
>>>>>>> 08b1cc6bbdf52c1d0601312df1f1d44648364c2a
