# Notes for back-end side of project

After download source code and set-up the app, please add your .env file to main directory which contains all env variables listed ( `NODE_ENV, PORT, CLIENT_URL, DATABASE_CLOUD, DATABASE_LOCAL,JWT_SECRET`).

Then run
`npm start`
in order to start server.

# Notes for front-end side of project

After download source code and set-up the app, please add your next.config.js file to main directory which contains all env variables listed ( `APP_NAME, API_DEVELOPMENT, PRODUCTION`).

We also need to import NextCss node module to our config file to use it in our project.
Set up your config file as below:

```
const withNextCss = require('@zeit/next-css');

module.exports = withNextCss({
  publicRuntimeConfig: {
    APP_NAME: '',
    API_PRODUCTION: '',
    API_DEVELOPMENT: '',
    PRODUCTION: false
  }
});

```

Then run
`npm run dev`
in order to start nextjs server.
