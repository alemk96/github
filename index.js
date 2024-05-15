import { Octokit } from "octokit";
//import * as authKey from "./key.json" assert { type: "json" };
import TestKey from "./TestKey.js";


const octokit = new Octokit({
  auth: TestKey.git_key, // Utilizza la chiave di autenticazione
});

const githubApiVersion = "2022-11-28"; // Versione API GitHub

/**
* Esempi di richiesta all'API di GitHub
*/
try {
 
  /**
   * Permette di ottenere l'elenco degli utenti della piattaforma
   * @returns {Promise<Response>}
   */
  const usersResponse = await octokit.request("GET /users", {
    per_page: 100,
    headers: {
      "X-GitHub-Api-Version": githubApiVersion,
    },
  });

  console.log("Elenco degli utenti:", usersResponse.data[0]);
  
  // Ottieni il nome del primo utente dall'elenco
  const username = usersResponse.data[0].login;

  // Ottieni elenco dei repository per l'utente specificato
  const reposResponse = await octokit.request(`GET /users/${username}/repos`, {
    headers: {
      "X-GitHub-Api-Version": githubApiVersion,
    },
  });

  console.log("Elenco dei repository dell'utente:", reposResponse.data);

  // Ottieni elenco delle issues per un repository specifico
  const issuesResponse = await octokit.request(`GET /repos/${username}/god/issues`, {
    headers: {
      "X-GitHub-Api-Version": githubApiVersion,
    },
  });

  console.log("Elenco delle issues nel repository:", issuesResponse.data[0]);

  
} catch (error) {
    console.error("Errore durante la richiesta all'API di GitHub:", error);
}


