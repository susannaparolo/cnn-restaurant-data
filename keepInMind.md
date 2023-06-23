# a few things to keep in mind

1. Sample of full-stack project structure:
   https://github.com/Selfridges-Co/pos-cc-frontend/tree/master

We can add AWS logic in github actions, in lambda and stack later on without changing the structure. I suggest not to use folders like: client / server.

2. If there's an issue with DEVC-23 (https://selfridges.atlassian.net/jira/software/c/projects/DEVC/boards/793?modal=detail&selectedIssue=DEVC-23), see tip in the end of expected-structure.ts file

3. If there's an issue with DEV-7 (https://selfridges.atlassian.net/jira/software/c/projects/DEVC/boards/793?modal=detail&selectedIssue=DEVC-7) analyse this example:
   https://cnn-restaurant.vercel.app/

4. Remember the main goal: create minimum viable product. We can skip now:

- proper testing
- proper types
- design aspects

Concentrate on:

- functionality
- data presentation

5. Move repository into private, It's still considered to be Selfridges code. Do not store any tokens and passwords there - use github secrets or .env - don't forget to add it in .gitignore
