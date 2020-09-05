# React.js Workshop

#### Saturday, 5th September

##### Introduction

- App overview
- App architecture
- Workshop structure

##### Tools

- npm / package.json
- eslint
- prettier
- react / react-dom
- parcel

##### Components

- List component
- Filters component
- React Hooks
- Google Maps Integration
- State - Local state / Shared state
- State types - UI state / Data state
- Lifecycle methods / Effects

##### Q&A

#### Sunday, 6th September

##### State management

- Previous state / New State
- Pure / Impure Functions
- Function composition
- Reducers
- Redux

##### Async / Routing

- Asynchronous API Requests
- Routing
- Nested routing

##### Deploy

- Build the project
- Host it online

##### Q&A

- npm / package.json
- eslint
- prettier
- react / react-dom
- parcel

### npm / package.json

```
npm init -y
```

### eslint

```
npx eslint init
```

or

```
npm install eslint eslint-config-airbnb eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks --save-dev
```

### prettier

```
npm i eslint-config-prettier eslint-plugin-prettier prettier --save-dev
```

Create `.prettierrc`

```
{
  "trailingComma": "es5",
  "tabWidth": 2,
  "semi": true,
  "singleQuote": true
}
```

Add `prettier` rules to `.eslintrc`

```
  "rules": {
    "prettier/prettier": ["error"]
  }
```

### react / react-dom

```
npm i react react-dom
```

### parcel

```
npm i parcel-bundler --save-dev
```

### Static assets

[entities.json](https://d3d8gwugie9kx8.cloudfront.net/workshop-coop/entities.json)
[cities.json](https://d3d8gwugie9kx8.cloudfront.net/workshop-coop/cities.json)
