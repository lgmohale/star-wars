"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var request = __importStar(require("request"));
var DataLoader = require('dataloader');
exports.getFetcher = function (rootURL) {
    var apiRoot = rootURL || 'https://swapi.dev/api/';
    return function (resource) {
        var url = resource.indexOf(apiRoot) === 0 ? resource : apiRoot + resource;
        return new Promise(function (resolve, reject) {
            console.log("fetch: " + url);
            request.get(url, function (err, resp, body) {
                console.log("fetch: " + url + " completed");
                err ? reject(err) : resolve(JSON.parse(body));
            });
        });
    };
};
exports.getLoader = function (fetch) {
    return new DataLoader(function (urls) {
        var promises = urls.map(function (url) {
            return fetch(url);
        });
        return Promise.all(promises);
    }, { batch: false });
};
exports.getPageFetcher = function (fetch) { return function (resource, offset, limit) {
    var results = [];
    var index = 0;
    var size = limit || 0;
    function pagination(pageURL) {
        return new Promise(function (resolve, reject) {
            fetch(pageURL).then(function (data) {
                // fast forward until offset is reached
                if (offset && results.length === 0) {
                    if (index + data.results.length > offset) {
                        results = data.results.slice(offset - index);
                    }
                    if (data.next) {
                        index = index + data.results.length;
                        pagination(data.next).then(resolve);
                    }
                    else {
                        resolve(results);
                    }
                }
                else {
                    if (size > 0 && size - results.length - data.results.length < 0) {
                        results = results.concat(data.results.slice(0, size - results.length));
                    }
                    else {
                        results = results.concat(data.results);
                    }
                    if (data.next && (size === 0 || size - results.length > 0)) {
                        pagination(data.next).then(resolve);
                    }
                    else {
                        resolve(results);
                    }
                }
            });
        });
    }
    return pagination(resource);
}; };
