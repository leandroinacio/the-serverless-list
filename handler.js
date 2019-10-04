'use strict';
const { fetchReports, viewReport } = require("./api/report");

module.exports.fetch = fetchReports;
module.exports.view = viewReport;