const { fetchReports, viewReport } = require("../service/report");

const ERROR_RESPONSE = {
    statusCode: 500,
    body: 'Something went wrong :('
};

// Fetch all news ordered by views
module.exports.fetchReports = async event => {
    try {
        return {
            statusCode: 200,
            body: JSON.stringify(fetchReports())
        };
    } catch (error) {

        // I would work on more detailed logs and error message here
        console.error('Exception on fetchReports');
        return ERROR_RESPONSE;
    }
};

// Ping report to update view count
module.exports.viewReport = async event => {
    try {
        return {
            statusCode: 200,
            body: JSON.stringify(viewReport(event.pathParameters.id))
        };
    } catch (error) {

        // I would work on more detailed logs and error message here
        console.error('Exception on viewReport');
        return ERROR_RESPONSE;        
    }
};