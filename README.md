# CEB Licensee App

This is the project for the CEBroker Licensee web application.

## Installation

To install the project all you have to do is clone the repo and install the dependencies.

```
git clone https://github.com/cebroker/ceb-licensee.git 
cd ceb-licensee
npm install
```

## Scripts
You can run following npm scripts in order to execute the most common tasks:

### `npm start`

Runs the app in development mode at http://localhost:3000.

You also can change the environment that will run the project. Just add this to the command:

  `REACT_APP_ENV=[ENVIRONMENT] npm start`

The `[ENVIRONMENT]` could be equal to: `development`, `test`, `demo`, `production`.

### `npm test`

Runs the test watcher in an interactive mode. By default, runs tests related to files changes since the last commit. See the test output to learn more.

### `npm build`

Builds the app for production by setting the bundles in production mode and optimizing the build for the best performance.
Your app is ready to be deployed!