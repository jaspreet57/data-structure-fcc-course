## System history of shell commands used to setup this project.

```
npm init
npm install eslint --save-dev
npx eslint --init
npm install typescript --save-dev
npm install --save-dev babel-jest
npm install @babel/preset-env --save-dev
npm install --save-dev @babel/preset-typescript
npm install --save-dev jest
jest
npm test
npm i @types/jest --save-dev
npm i --save-dev eslint-plugin-jest
```

## Steps

#### First Eslint is configured for node, es6, typescript - just run the eslint --init and it does everything

#### To make typescript extensions file import properly
    1. Install typescript, and eslint-plugin-import
    2. And add settings and rules in eslint config to resolve imports and ignore extensions.

#### Setup Babel only for jest - as in this project we are only going to run jest.
    1. Install @babel/preset-env, @babel/preset-typescript
    2. In .babelrc set preset-env and preset-typescript

#### Setting up jest
    1. install jest, babel-jest, @types/jest and eslint-plusing-jest
    2. in jest config set transform setting to `"^.+\\.ts?$": "babel-jest"`
    3. set `jest/globals` to true in eslint env. and extends jest/all rules

#### .rc for prettier vs-code plugin
    1. Prettier is not added in node_modules
    2. Instead only .prettierrc is added, so that vs-code prettier extension can make use of it.
