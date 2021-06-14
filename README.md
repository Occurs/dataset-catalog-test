## Description

A simple list of spells from real [Dungeon and Dragons API](http://www.dnd5eapi.co/) to search, filter, and pagination.

## Dependencies

Node.js (14.17.0 or higher)
install from [nodejs](https://nodejs.org/en/) or 
```bash
brew install node
```
Yarn  (1.22.0 or higher)
```bash
npm install --global yarn
```
## Quick start (development mode)
To start the project you need Node and Yarn

```bash
yarn run dev
```

## Tech stack

- [Typescript](https://www.typescriptlang.org/)
- [React](https://reactjs.org/)
- [Webpack](https://webpack.js.org/)
- [Babel](https://babeljs.io/)
- [Axios](https://github.com/axios/axios)
- [SWR](https://swr.vercel.app/)

## UI

Project build with [Material UI](https://material-ui.com/ru/) as UI kit and styling library
## Environment

| Name     | Description                               | Example    |
| -------- | ----------------------------------------- | ---------- |
| NODE_ENV | Webpack variable for dev or prod build   | production |

## Testing

Testing libraries
- [Jest](https://jestjs.io/ru/)
- [Testing-library](https://testing-library.com/)

To run the tests
```bash
yarn run test
```
## Prod build

```bash
yarn install
yarn ENV=production run build
```

## Project structure
```bash
├── public              # index.html
├── src                 # Sources
│   ├── pages           # Application pages 
│   ├── components      # Reusable components
│   ├── utils           # Utils and helpers
│   ├── hooks           # Custom react hooks
│   ├── assets          # Images
│   ├── __tests__       # Unit and integration tests
├── webpack             # Common, prod, and dev webpack settings
├── global.d.ts         # Global types
├── tsconfig.json       # Typescript settings
├── yarn.lock           # Dependencies and nested dependencies tree
```

## Routes

All routes declared in the 'src/features/router/routes.ts'

© Kirill Kostyushko, 2021 ❤️
