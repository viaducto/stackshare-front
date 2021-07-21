# Stackshare

This is the front-end Stackshare project made with React

### Codacy Code Quality

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/416a3942a19840668ba421fe409de157)](https://www.codacy.com/gh/viaducto/stackshare-front/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=viaducto/stackshare-front&amp;utm_campaign=Badge_Grade)

## Instalation

```js
  $ npm install
```

## Running

```js
  $ npm start
```

## Testing
```bash
  # Open Cypress UI
  $ npm run cypress
```
```bash
  # Run Cypress CLI to run integration testing
  $ npm run cypress run
```

## Docker

This project has ```Dockerfile``` and ```docker-compose```

```bash
  # docker-compose process
  $ docker-compose up
```

```bash
  # Dockerfile build image
  $ docker build . --tag stackshare
  ...
  # docker run container
  $ docker run -dp 3000:3000 stackshare
```