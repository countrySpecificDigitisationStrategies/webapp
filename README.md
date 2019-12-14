# Digitisation Strategies Creator

## Project Overview
This App should enable developing countries to create realistic digitisation strategies more easily.
The strategies can be built by a country's representative IT-board members in the interactive strategy creator.
The finished strategy draft can then be published for discussion.
In our integrated discussion forum the country's citizens and international experts can give their feedback and make suggestions for improvements.
The collaboration tool enables the IT-board members to further refine their draft and in the end come to a well designed and realistic strategy. 
Finally, the digitisation strategy can be published as an example for other countries that try to implement a digitisation strategy on their own.

Visit the project here: [https://sysdev.netlify.com/](https://sysdev.netlify.com/). 

## Development
If you want to contribute to this project, the following section describes the most common commands you will need.
For a more in depth overview of the used technologies, the project's structure, best practices we try to follow, etc. have a look at [GUIDE.md](GUIDE.md).   

### Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

#### Installing
After downloading this project you will need to run `npm install` once, to install all project dependencies.
Then you will need to add the URL of the API to use in a `.env` file at the root level of the project (see accompanying `.env.dist` for the required format).
Finally you can simply run `npm start` to start a development server locally, which will serve the web app on `localhost:8080`. 

#### Update dependencies
To check for dependency updates you are able to run `npm run upgrade-interactive`. 

#### Deployment
To build a production build, you will need to run `npm run build`.

#### Linting
To lint and fix your code, you can run `npm run lint`. Whenever you commit something this happens automatically.

## License
TBD
