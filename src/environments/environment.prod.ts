export const environment = {
  production: true
};



const hostname = window.location.hostname;
export const hostURL = `http://${hostname}`;

export const awsUrl = `http://api-env.eba-udukpxjr.us-east-2.elasticbeanstalk.com/`

/**
 *
 * environment.ts and environment.prod.ts are used in your angular application for loading different variables depending on where the application is running.

ng serve will run the application with the environemnt.ts file. ng serve --prod will run the application with the environment.prod.ts file.

A good example of this would be for an API url. In development you would use http//:localhost:<port> where as in production the url might be www.<my-api>.com you can use the different environment files to have these switch between builds.

Keep in mind that the angular environment file will be readable to any user on you website. It's a bad idea to keep usernames, passwords or api keys in the environment.ts or environment.prod.ts files.
 */
