# Analisi GitHub API per Social Media Mining

### Componenti del gruppo

- Alessio Medda - [alessio.medda@studenti.unimi.it](mailto:alessio.medda@studenti.unimi.it)
- Paolo Sangallo - [paolo.sangalli1@studenti.unimi.it](mailto:paolo.sangalli1@studenti.unimi.it)
- Davide Archidi - [davide.archidi@studenti.unimi.it](mailto:davide.archidi@studenti.unimi.it)

Questo è un esempio di codice JavaScript che utilizza l'API di GitHub per effettuare diverse richieste, utilizzando l'Octokit library per semplificare l'interazione con l'API.

## Prerequisiti

- Node.js.
- Chiave di autenticazione per l'API di GitHub. È presente un token di prova nel file ```TestKey.js```.

## Installazione

1. Clonare il repository o scarica il file `TestKey.js` e `package.json`.

2. Installare le dipendenze del progetto eseguendo il comando:

    ```bash
    npm install
    ```

## Utilizzo

1. Esegui il codice utilizzando Node.js con il comando:

    ```bash
    npm start
    ```

2. Il codice effettuerà diverse richieste all'API di GitHub e stamperà i risultati nella console.

## Struttura del codice

- `TestKey.js`: Contiene la chiave di autenticazione per l'API di GitHub. Si prega di NON condividere questa chiave con altri.

- `index.js`: Codice JavaScript principale che effettua richieste all'API di GitHub utilizzando l'Octokit library.

- `package.json`: Contiene le configurazioni per l'app node.
