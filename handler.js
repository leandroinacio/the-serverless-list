'use strict';
require('dotenv').config();
const { fetchReports, viewReport } = require("./api/report");
const { mockNews } = require("./repository/report");

//mockNews();
module.exports.fetch = fetchReports;
module.exports.view = viewReport;