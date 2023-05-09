## Running the Application

### Dev Environment

To run the application in the dev environment, follow these steps:

1.  Create a `.env` file in the root directory of your project.

2.  Set REACT_APP_ENV environment variable in the `.env` file. For example:


    REACT_APP_ENV = "development"

3.  Start the application by running the command:


    npm start

After starting, the application will be available at [http://localhost:3000](http://localhost:3000/).


### Prod Environment

To run the application in the prod environment, follow these steps:

1.  Build the application by running the command:


    npm run build

2.  Install [npm serve](https://www.npmjs.com/package/serve/v/10.1.1) globally:


    npm i -g serve

3.  You may serve it with a static server now:


    serve -s build

By default, it will run on port 5000 so your local URL is [http://localhost:5000](http://localhost:5000/).


## Other Commands

-   `npm run test` - runs tests.
-   `npm run eject` - ejects the configuration files from create-react-app. Only run this command if you need to modify the application's configuration.

## Docker

### Dev Environment

To run the application in the dev environment using Docker, follow these steps:

1.  Install Docker.

2.  Install docker-compose.

3.  Start the application by running the command:


    npm run docker:dev

After starting, the application will be available at [http://localhost:3000](http://localhost:3000/).


### Prod Environment

To run the application in the prod environment using Docker, follow these steps:

1.  Install Docker.

2.  Install docker-compose.

3.  Start the application by running the command:


    npm run docker:prod

After starting, the application will be available at [http://localhost:3000](http://localhost:3000/).
