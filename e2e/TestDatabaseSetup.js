'use strict';

var SellStatistic = require('../server/models/sellStatistic');

class TestDatabaseSetup {
    constructor() {
    }

    clearChartData(callback) {
        SellStatistic.remove({},callback);
    }

    insertTestChartData(callback) {
        var data = [
            {"value" : 3000, "creationDate" : 1430784000000, "value2" : 900},
            {"value" : 1000, "creationDate" : 1431216000000, "value2" : 15},
            {"value" : 500, "creationDate" : 1423695600000, "value2" : 450}
        ];

        SellStatistic.collection.insert(data, callback);
    }
}

module.exports = new TestDatabaseSetup();