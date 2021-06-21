"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPageFetcher = exports.getLoader = exports.getFetcher = void 0;
const request = require("request");
const DataLoader = require('dataloader');
exports.getFetcher = (rootURL) => {
    const apiRoot = rootURL || 'https://swapi.dev/api/';
    return (resource) => {
        const url = resource.indexOf(apiRoot) === 0 ? resource : apiRoot + resource;
        return new Promise((resolve, reject) => {
            console.log(`fetch: ${url}`);
            request.get(url, (err, resp, body) => {
                console.log(`fetch: ${url} completed`);
                err ? reject(err) : resolve(JSON.parse(body));
            });
        });
    };
};
exports.getLoader = (fetch) => {
    return new DataLoader((urls) => {
        const promises = urls.map((url) => {
            return fetch(url);
        });
        return Promise.all(promises);
    }, { batch: false });
};
exports.getPageFetcher = (fetch) => (resource, offset, limit) => {
    let results = [];
    let index = 0;
    const size = limit || 0;
    function pagination(pageURL) {
        return new Promise((resolve, reject) => {
            fetch(pageURL).then((data) => {
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
};
//# sourceMappingURL=swapi.js.map