# mapapps-devnet-blueprint

**This project is not intended for use by non-con terra users.** It is designed for the creation of bundles and their releases in GitHub and can access con terra internal infrastructures for this purpose. To develop your own map.apps bundles, use the [mapapps-4-developers project](https://github.com/conterra/mapapps-4-developers).

This project is a starting point for programming custom map.apps bundles and themes.
You may use this project as a blueprint for starting your own map.apps project.

Bundles can be implemented in both TypeScript and JavaScript. As an example, this project contains the `sample_helloworld` bundle (implemented in TypeScript), which demonstrates how to provide a simple UI component and a tool.

For detailed documentation on how to use map.apps for Developers to extend map.apps, see the [map.apps Developer's Guide](https://docs.conterra.de/en/mapapps/latest/developersguide/getting-started/).

## Software Requirements

- Java >= 17
- Maven >= 3.8.0
- pnpm >= 10.18.3

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

To execute the tests in your browser, open <http://localhost:9090/js/tests/runTests.html> (may be on a different port depending on your configuration).

For more details refer to the [Developer's Guide](https://docs.conterra.de/en/mapapps/latest/developersguide/getting-started/).
