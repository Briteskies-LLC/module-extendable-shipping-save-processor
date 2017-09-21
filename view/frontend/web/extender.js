define([], function () {
    'use strict';

    return function (payload) {
        payload.extension_attributes = {};
        return payload;
    }
});
