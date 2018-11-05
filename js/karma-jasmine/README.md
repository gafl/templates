Karma Jasmine Project Template
==============================

Simple template starting point for a JavaScript project using [Karma](http://karma-runner.github.io/latest/index.html) test runner and [Jasmine](https://jasmine.github.io/) test framework.

Getting Started
---------------

### Install Node.js

Ensure you have Node.js 6.x or later and NPM installed. See Karma [installation](http://karma-runner.github.io/latest/intro/installation.html) for latest version requirements.

### Install Karma and plugins

A package.json file is included to specify the required dependencies.

```
# In the project directory, install all dependencies:
$ npm install
```

### Run Karma

```
$ ./node_modules/karma/bin/karma start
```

You might find it useful to install `karma-cli` globally (required for Windows).

```
$ npm install -g karma-cli
```

Then you can run Karma by `karma` from anywhere.

### Edit specs and code

Bootstrap Jasmine spec and JS files are provided in the `src` folder.

### Optionally, update package.json

Update the project name and other items marked with TODO in package.json. If you plan to publish your project via NPM remove the `"private": true` property from the file.

