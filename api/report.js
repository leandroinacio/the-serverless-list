const { fetchReports, viewReport } = require("../service/report");

const ERROR_RESPONSE = {
    statusCode: 500,
    body: 'Something went wrong :('
};

// Fetch all news ordered by views
module.exports.fetchReports = async event => {
    try {
        console.log('fetchReports api');        
        let response = await fetchReports();

        return {
            statusCode: 200,
            body: JSON.stringify(response)
        };
    } catch (error) {

        // I would work on more detailed logs and error message here
        console.error('Exception on fetchReports' + error);
        return ERROR_RESPONSE;
    }
};

// Ping report to update view count
module.exports.viewReport = async event => {
    try {
        console.log('view report api');
        let response = await viewReport(event.pathParameters.id);
        
        return {
            statusCode: 200,
            body: JSON.stringify(response)
        };
    } catch (error) {

        // I would work on more detailed logs and error message here
        console.error('Exception on viewReport: ' + error);
        return ERROR_RESPONSE;        
    }
};