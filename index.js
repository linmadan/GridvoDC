'use strict';
var bearcat = require('bearcat');
var appEvent = require('./lib/application/appEvent');
var bearcatContextPath = require.resolve('./bcontext.json');
bearcat.createApp([bearcatContextPath]);
var createDataDispatch;
var createDataRTMaster;
var createStationManage;
bearcat.start(function () {
    createDataDispatch = function () {
        return bearcat.getBean('dataDispatch');
    };
    createDataRTMaster = function () {
        return bearcat.getBean('dataRTMaster');
    };
    createStationManage = function () {
        return bearcat.getBean('stationManage');
    };
});
module.exports.createDataDispatch = createDataDispatch;
module.exports.createDataRTMaster = createDataRTMaster;
module.exports.createStationManage = createStationManage;
module.exports.appEvent = appEvent;