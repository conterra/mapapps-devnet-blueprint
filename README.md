# mapapps-remote-project-blueprint

This project is a blueprint for starting a con terra developer network bundle.

* [Contents](https://github.com/conterra/mapapps-remote-project-blueprint#contents)
* [Requirements](https://github.com/conterra/mapapps-remote-project-blueprint#requirements)
* [Usage](https://github.com/conterra/mapapps-remote-project-blueprint#usage)
* [Updating from older versions](https://github.com/conterra/mapapps-remote-project-blueprint#updating-from-older-versions)
* [References](https://github.com/conterra/mapapps-remote-project-blueprint#references)

## Contents

This Maven project includes some of the core concepts for developing UI driven bundles in map.apps. Use this readme as a guide for what to discover in this project. After studying this project, you should be able to answer the following questions:

* How can I use **Vue.js** to build widgets following the **MVVM** pattern?
* How does the **MVVM** pattern help to make UI components and models **testable**?
* How do I build widgets with ready-to-use UI components from Vuetify.js?
* How do I build a custom theme (theme-custom)?
* How can the view-model interact via **bindings** with (Accessor) models from the **ESRI ArcGIS API for JavaScript**?
* How is my **layout** integrated into **map.apps templates**?
* How do **gulp** processes modify my source code?

## Requirements

* map.apps 4.7.1
* all resources from `CD-Contents/sdk/m2-repository` need to be copied manually to your local maven repository (e.g. `%UserProfile%/.m2/repository` for Windows, `~/.m2/repository` for MacOS).

## Usage

The project supports a 'remote project' and 'standalone project' mode.

### Use 'remote project' mode

In this mode a map.apps installation is available elsewhere and most JavaScript resources are fetched from this installation.
This mode is recommended.

The URL of the mapapps server can be declared in the pom.xml. Replace:

```xml
 <mapapps.remote.base>.</mapapps.remote.base>
```

with

```xml
 <mapapps.remote.base>http://yourserver/mapapps</mapapps.remote.base>
```

As alternative the URL can be declared in a file called `build.properties` with the content

```properties
mapapps.remote.base=http://yourserver/mapapps
```

and enabling the "env-dev" maven profile.
Append `-P env-dev` to any maven execution or declare the profile as activated by default in your maven settings.xml.

### Use 'standalone project' mode

In this mode all JavaScript sources are included to this project during development.
The drawback of this mode is that you can not test authentication and that the default settings are not read from the remote instance.

This mode requires that the profile `include-mapapps-deps` is activated.
Append `-P include-mapapps-deps` to any maven execution or declare the profile as activated by default in your maven settings.xml.

### Start a local http server

Start the integrated jetty server with:

```sh
mvn jetty:run -P watch-all
```

Make sure that the `watch-all` maven profile is activated.
The profile will start a gulp task that watches for changes in your source code.

After a successfull start, the jetty server ist available at [http://localhost:9090](http://localhost:9090).

### Start coding

For detailed development documentation have a look at [conterra's developer network](https://developernetwork.conterra.de/de/documentation/mapapps/development-guide) (account required).

### Make your code production ready

To ensure that all files are compressed/minified and a dependencies.json is calculated execute:

```sh
mvn clean install -P compress
```

### Running the tests

To execute the unit tests inside the project, run [http://localhost:9090/js/tests/runTests.html](http://localhost:9090/js/tests/runTests.html).

> If you run the project in 'remote project' mode, you will have to edit the `test-init.js` file located in the `/src/test/webapp/js/tests/` folder.

### Build Process

* The gulpfile that determines the build process can be found in the root directory: `/gulpfile.js`
* package.json / npm

## Updating from older versions

### from 4.7.0 to 4.7.1
1. adjust the `mapapps.version` property in `./pom.xml`  to `4.7.1` 
2. adjust the `ct.jsregistry.version` property in `./pom.xml`  to `1.3.1` 

### from 4.6.1 to 4.7.0
1. adjust the `mapapps.version` property in `./pom.xml`  to `4.7.0` 
2. adjust the `ct.jsregistry.version` property in `./pom.xml`  to `1.3.0` 
3. adjust versions of devDependencies in `./package.json` according to the list below:
    * "eslint-config-ct-prodeng": "^1.0.5"
    * "vue-template-compiler": "2.6.6"

### from 4.6.0 to 4.6.1
1. adjust the `mapapps.version` property in `./pom.xml`  to `4.6.1` 

### from 4.5.0 or below to 4.6.0
1. adjust the `mapapps.version` property in `./pom.xml`  to `4.6.0`
2. adjust versions of devDependencies in `./package.json` according to the list below:
    * "ct-mapapps-gulp-js": "~0.1.3"    
    * "vue-template-compiler": "2.5.17"
3. go to `./src/test/webapp/index.html` and replace the `corsEnabledServers: ["@@mapapps.remote.base@@"]` with `trustedServers: ["@@mapapps.remote.base@@"]` inside the apprt request configuration object.

## References

* [Vue.js](https://vuejs.org)
* [Vuetify.js](https://vuetifyjs.com)
* [Gulp](http://gulpjs.com)
