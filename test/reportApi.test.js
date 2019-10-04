// Mock the report service layer
jest.mock("../service/report", () => ({
    fetchReports: jest
        .fn()
        .mockReturnValueOnce('success'),
    viewReport: jest
        .fn()
        .mockReturnValueOnce('success')
        .mockReturnValueOnce(() => {
            throw 'exception'
        })
}));

const reportApi = require("../api/report");

test("should return report on response for valid fetchReports", () => {
    reportApi.fetchReports().then((response) => {
        expect('\"success\"').toEqual(response.body);
        expect(200).toEqual(response.statusCode);
    });
});

test("should return report on response for valid viewReport", () => {
    reportApi.viewReport(1).then(response => {
        expect('\"success\"').toEqual(response.body);
        expect(200).toEqual(response.statusCode);
    });
});

test("should return error response for exception on viewReport", () => {
    reportApi.viewReport(1).then(response => {
        expect('Something went wrong :(').toEqual(response.body);
        expect(500).toEqual(response.statusCode);        
    });
});