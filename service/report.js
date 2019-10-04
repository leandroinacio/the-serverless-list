const reportRepository = require('../repository/report');

module.exports.fetchReports = () => {
    console.log('fetchReports service');
    return reportRepository.fetchReports(); 
};

// Get the record. If it exists, increase views
module.exports.viewReport = reportId => {
    console.log('view reports service');
    return reportRepository.viewReport(reportId).then((report) => {
        if (!record) { return; }
        report.views++;
        return reportRepository.updateReport(report);            
    });
};