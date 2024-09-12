# mapapps-devnet-blueprint

**This project is not intended for use by non-con terra users.** It is designed for the creation of bundles and their releases in GitHub and can access con terra internal infrastructures for this purpose. To develop your own map.apps bundles, use the [mapapps-4-developers project](https://github.com/conterra/mapapps-4-developers).

This project is a starting point for programming custom map.apps bundles and themes. It contains examples for common tasks such as building widgets with Vue.js or creating your own custom themes.
You may use this project as a blueprint for starting your own map.apps project.

Since both Typescript and Javascript can be used to implement bundles, this project contains two bundles with the same functionality, `sample_camera` implemented in Typescript and `sample_camera_js` implemented in Javascript.
Initially only the `sample_camera` bundle is included in the `Demo` sample app.

For detailed documentation on how to use map.apps for Developers to extend map.apps, see the [map.apps Developer's Guide](https://docs.conterra.de/en/mapapps/latest/developersguide/getting-started/).

## Software Requirements

- Java >= 17
- Maven >= 3.9.0

## Quick start

Clone this project and ensure that you have all required dependencies installed correctly (see [Documentation](https://docs.conterra.de/en/mapapps/latest/developersguide/getting-started/set-up-development-environment.html)).

Then run the following commands from the project root directory to start a local development server:

```bash
# install all required node modules
$ mvn initialize

# start dev server
$ mvn compile -Denv=dev -Pinclude-mapapps-deps

# run unit tests
$ mvn test -P run-js-tests,include-mapapps-deps
```

For more details refer to the [Developer's Guide](https://docs.conterra.de/en/mapapps/latest/developersguide/getting-started/).
