/*
 * Copyright (C) 2023 con terra GmbH (info@conterra.de)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const gulp = require("gulp");
const mapapps = require('ct-mapapps-gulp-js');
const mapappsBrowserSync = require("ct-mapapps-browser-sync");

const isProduction = process.env.NODE_ENV === "production";
console.info(`Configuring gulp build for ${isProduction ? "production" : "development"}`);

// used to transport test urls in "run-browser-tests-local" task
const runBrowserTests = [];

mapapps.registerTasks({
    /* A detailed description of available setting is available at https://www.npmjs.com/package/ct-mapapps-gulp-js */
    compress: isProduction,

    /* build source maps as e.g. ".js.map" */
    sourceMaps: "file",

    /* a list of themes inside this project */
    themes: [/*"sample-theme"*/],
    /* state that the custom theme will be dependant from map.apps everlasting theme that provides the base styles */
    hasBaseThemes: true,
    /* state that we want to support vuetify components and therefore need the vuetify core styles*/
    hasVuetify: true,
    themeChangeTargets: {
        "vuetify": [
            // "sample_theme"
        ]
    },
    runBrowserTests,
    /* A list oft target browser versions. This should be streamlined with Esri JS API requirements. */
    transpileTargets: {
        firefox: 102,
        edge: 104,
        chrome: 104,
        safari: 15
    }
});

mapappsBrowserSync.registerTask({
    port: 9090,
    // prevent reload by browser sync
    externalReloadTrigger: true,
    urlToOpen: true,

    // activate https protocol, generates a self signed certificate for "localhost"
    https: false,

    jsreg: {
        //npmDir : __dirname + "/node_modules/",
        npmModules: [
            "mocha",
            "chai",
            "@conterra/mapapps-mocha-runner"
        ]
    }
}, gulp);

gulp.task("build",
    gulp.series(
        "copy-resources",
        "themes-copy",
        gulp.parallel(
            "js-transpile",
            "themes-compile"
        )
    )
);

gulp.task("lint",
    gulp.parallel(
        "js-lint"
        //,"style-lint"
    )
);

gulp.task("preview",
    gulp.series(
        "build",
        gulp.parallel(
            "watch",
            "browser-sync"
        )
    )
);

gulp.task("run-tests",
    gulp.series(
        "browser-sync-start",
        function transportTestUrls() {
            // transport test url to run-browser-tests
            // eslint-disable-next-line max-len
            const testsAt = mapappsBrowserSync.state.url + "/resources/jsregistry/root/@conterra/mapapps-mocha-runner/latest/mocha.html?boot=/js/tests/test-init.js&timeout=5000&test=sample_helloworld/tests/all&reporter=tap";
            runBrowserTests.push(testsAt);
            return Promise.resolve();
        },
        "run-browser-tests",
        "browser-sync-stop"
    )
);

gulp.task("test",
    gulp.series(
        "build",
        "lint",
        "run-tests"
    )
);

gulp.task("compress",
    gulp.series(
        "build",
        "themes-compress",
        "lint"
    )
);

gulp.task("default",
    gulp.series(
        "build",
        "lint"
    )
);
