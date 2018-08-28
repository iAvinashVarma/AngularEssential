# AngularEssential

AngularEssential project is based on [LinkedIn Learning](https://www.linkedin.com/learning)'s [Angular Essential](https://www.linkedin.com/learning/angular-essential-training) instructed by [Justin Schwartzenberger](https://www.linkedin.com/learning/instructors/justin-schwartzenberger) and was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.1.5.

## npm commands

```cmd
npm install --save bootstrap@latest
npm install --save jquery@latest
npm install --save-dev karma@3.0.0
npm install -g npm
npm audit fix => To Fix vulnerabilities
```

## ng commands

```cmd
ng new AngularEssential
pushd AngularEssential
ng generate component nav-bar
ng generate component main-item
ng generate component media-item
ng generate component media-item-list
ng generate directive favorite
ng generate pipe category-list
ng generate component media-item-form
ng generate service media-item
ng generate class providers
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
