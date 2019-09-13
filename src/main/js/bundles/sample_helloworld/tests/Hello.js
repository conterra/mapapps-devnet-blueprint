/*
 * Copyright (C) 2019 con terra GmbH (info@conterra.de)
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
define([
    "intern!object",
    "intern/chai!assert",
    "module",
    "../Hello"
], function(registerSuite, assert, md, Hello) {

    var createHello = function(msg) {
        var hello = new Hello();
        hello._properties = {message: msg};
        hello.activate();
        return hello;
    };

    registerSuite({
        name: md.id,
        "expect properties.message is returned by getMessage": function() {
            assert.equal(createHello("hello world").getMessage(), "hello world");
        }
    });
});