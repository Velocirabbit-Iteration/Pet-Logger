# Pet-Logger
Keep track of your pets and their activities!

## Scratch Project Team:
- Neul Seo - [neulseo2](https://github.com/neulseo2)
- Reem Abi Ammar - [RGA29](https://github.com/RGA29)
- Michael Underbrink - [MUnderbrink90](https://github.com/MUnderbrink90)
- Bongi Sibanda - [trialnerr](https://github.com/trialnerr)
- Evan Griffith - [EvanCG](https://github.com/EvanCG)

## Iteration Project Team:
- Adeeb Bayat - [adeebbayat](https://github.com/adeebbayat)
- Emma Ijiogbe - [emmagawd](https://github.com/emmagawd)
- Marselena Romero - [marsbird](https://github.com/marsbird)
- Howard Sun - [howardCodeGit](https://github.com/howardCodeGit)
- Lillian Tenn - [tenn501](https://github.com/tenn501)

## Installation

Clone repo (`dev` = development, `main` = production)

```
npm install
```

Run the dev server:
```
npm run dev
```
Build `bundle.js`
```
npm run build
```

Run production:
```
npm start
```

## Resources

[Original Project Brief](https://docs.google.com/document/d/1FRxqzQAyEkf6vKRIRw1K4uQE90Ns0TCO/edit)

[Excalidraw](https://excalidraw.com/#room=cfdad5ee56f4643e116a,x7qBxZRVR2t59n9GJfMYBQ) - High level Mongo Shema, and UI frameworks. Note: Excalidraw shared files do not retain history, so be careful!

[Scrum Board](https://team-omydjgcen49r.atlassian.net/jira/software/projects/GGS/boards/1).

[#gobin-shark-scratch-project slack channel](https://codesmithecri46.slack.com/archives/C06N9RH4L87)

[Iteration Project Brief] (https://docs.google.com/document/d/18PJVy5rqm_WkpULniAe3l4CnA7rD-iY7/edit)

### Routes

Almost all requests defined in `server/routers/petLoggerRouter.js` and `server/controllers/petLogger/Controller.js`, so check there for source of truth.

**POST request to add new dog**
```
Method: POST
Endpoint: localhost:3000/api/dog
Body: { name, breed, age, gender }
Controller Method: addDog
Return: newDog object
```

**GET dogs of user**
```
METHOD: GET
Endpoint: localhost:3000/api/dog/:user
Controller method: getDogs
Response: array of matching dog objects
```

**GET for all posts of dog**
```
Method: GET
Endpoint: localhost:3000/api/post (query dogId)
Controller mtehod: getPost
Response: array of post objects [{postType, details, date}]
```

**POST for new activity to dog**
```
Method: POST
Endpoint: localhost:3000/api/post
Body: { dogID, postType, details } 
controller Method: addPost
Response: New Post object
```

### Database

MongoDB backend is associated with [trialnerr](https://github.com/trialnerr)'s account. IP Address allowlists will need to be explicitly indicated in order to read/write.
