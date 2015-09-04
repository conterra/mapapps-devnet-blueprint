# Sample Project which requires a installation of map.apps to work

## Pre Conditions
You need the libs provided by the "normal" sample project inside your local maven repository.

## MVN Goals:

### Start jetty at http://localhost:8080 for local implementation.
mvn jetty:run

### build uncompressed jar and app template
mvn install

### build uncompressed jar and app template and upload them to the remote map.apps installation
mvn clean install -P upload

### build compressed jar and app template
mvn clean install -P compress

### build compressed jar and app template and upload them to the remote map.apps installation
mvn clean install -P compress,upload


## URLs (after jetty:run goal)

### Base App
http://localhost:8080

### Embedded JS Registry
http://localhost:8080/resources/jsregistry/root

### Open Tests in Browser
http://localhost:8080/js/tests/runTests.html