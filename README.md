# NgAzureCi

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Angular2 generted with angular cli and setup for CI deploys to azure through github

Create Angular2 application with angular cli and setup CI builds and deployments to azure triggered upon push to the master branch

Source:
https://prmadi.com/running-angular2-app-on-azure-app-services-with-ci-cd/

1. create app with angular cli and setup git deployment in azure out of the master branch
ng new myApp

2. install azure cli
npm install azure-cli -g

3. generate deployment scripts with azure cli in the rooot of the application folder
   navigate to myApp root folder and execute
   azure site deploymentscript --basic
   this generates 2 new files
   .deployment and deploy.sh (mac)

4. update the deploy.sh with the content taken from 
https://github.com/prashanthmadi/angular2-azure-webapps/blob/master/deploy.sh
this is custom deployment script

5. add those files in git and push to master
    this will kick off deployment to the webApp setup in step 1

6. in azure, for the webApp, change the application root in ApplicationSettings/Virtual applications and directories
    the default root is site/wwwroot and this needs to be changed to site/wwwroot/dist


## note
dist folder will never be visible on the local repo unless ng build --prod is not executed explicitly
even if the prod build is executed locally, the generated dist folder will be ignored by git due to the gitignore
the actual build happens after the deployment to the azure webApp (so it's not expected to be in git repo at all)