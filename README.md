# map.apps Remote Project Blueprint

### Pre Conditions
This project requires an existing installation of map.apps to work. You need top copy the libs provided in the CD-Contents folder "m2repository" inside your local maven repository.

### Maven Goals

##### 2 methods to start jetty at http://localhost:8080 for local implementation.
1.
`mvn jetty:run -Dmapapps.remote.base=%mapapps.remote.base%`

2.
Change the mapapps.remote.base in the build.properties file
`mvn jetty:run -Denv=dev -Dlocal.configfile=%absolutepathtoprojectroot%/build.properties

##### build uncompressed jar and app template
`mvn install`

##### build uncompressed jar and app template and upload them to the remote map.apps installation
`mvn clean install -P upload`

##### build compressed jar and app template
`mvn clean install -P compress`

##### build compressed jar and app template and upload them to the remote map.apps installation
`mvn clean install -P compress,upload`

### URLs 
The following urls are available after maven goal `jetty:run` was executed.

##### Base App
http://localhost:8080

##### Embedded JS Registry
http://localhost:8080/resources/jsregistry/root

##### Open Tests in Browser
http://localhost:8080/js/tests/runTests.html
