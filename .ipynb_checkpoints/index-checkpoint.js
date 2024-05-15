import { Octokit } from "octokit";
import auth_key from './key.json' assert {type: "json"};
import minimist from "minimist"; 
import commandLineUsage from "command-line-usage";

const sections = [
    {
      header: 'Documentazione per chiamate API github',
      content: 'Generates something {italic very} important.'
    },
    {
      header: 'Options',
      optionList: [
        {
          name: 'user',
          typeLabel: '{underline user}',
          description: 'The input to process.'
        },
        {
          name: 'help',
          description: 'Print this usage guide.'
        }
      ]
    }
  ]
const usage = commandLineUsage(sections)

const octokit = new Octokit({
    auth: auth_key.git_key,
});
const args = minimist(process.argv.slice(2))


if (args.h || args.help) {
    console.log(usage)
    exit
}

if (args.u || args.user) {

    var user = args.u || args.user ? args.u || args.user : ""
    var users = await octokit.request(`GET /users/${typeof(user)=="boolean"?user:""}`, {
        per_page: 100,
        headers: {
        'X-GitHub-Api-Version': '2022-11-28'
        }
    })
    console.log(users.data) 
}

if (args.r || args.repo) {
    var repo = args.r || args.repo ? args.r || args.repo : ""
    var userRepo = await octokit.request(`GET /users/repos/${typeof(repo)=="boolean"?repo:""}`, {
        headers: {
        'X-GitHub-Api-Version': '2022-11-28'
        }
    })
    console.log(userRepo.data)

}
/*

//request users
var users = await octokit.request('GET /users', {
    per_page: 100,
    headers: {
    'X-GitHub-Api-Version': '2022-11-28'
    }
})

console.log(users.data[0])

var userName = "alemk96"

var userRepo = await octokit.request(`GET /users/${userName}`, {
    headers: {
    'X-GitHub-Api-Version': '2022-11-28'
    }
})


console.log(userRepo.data)

*/