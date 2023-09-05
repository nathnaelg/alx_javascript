#!/usr/bin/node
exports.addMeMaybe = function (n, fun) {
    return fun(n + 1);
};
