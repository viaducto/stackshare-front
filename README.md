# Stackshare

This is the front-end Stackshare project made with React

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