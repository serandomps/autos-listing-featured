var dust = require('dust')();
var serand = require('serand');
var utils = require('utils');
var Vehicle = require('vehicles-service');
var list = require('vehicles-find');

module.exports = function (ctx, container, options, done) {
    Vehicle.find({
        query: options.query,
        images: '288x162'
    }, function (err, vehicles) {
        if (err) {
            return done(err);
        }
        list(ctx, container, {
            vehicles: vehicles,
            title: 'Featured',
            deck: options.deck,
            size: 4
        }, done);
    });
};
