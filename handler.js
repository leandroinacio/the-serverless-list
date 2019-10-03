'use strict';

// Mocked news
let reports = [{
		id: 1,
		title: 'Spider-man is a Menace!',
		views: 1
	},
	{
		id: 2,
		title: 'Los pollos hermanos',
		views: 3
	},
	{
		id: 3,
		title: 'Weather today',
		views: 2
	}
];

const orderByViews = (reportA, reportB) => reportB.views - reportA.views;

// Fetch all news ordered by views
module.exports.fetch = async event => {
	return {
		statusCode: 200,
		body: JSON.stringify(reports.sort(orderByViews)),
	};
};

// Ping report to update view count
module.exports.view = async (event, context, callback) => {
	const report = reports.find((current) => current.id == event.pathParameters.id);
	report.views++;
	return {
		statusCode: 200,
		body: JSON.stringify(report)
	};
};
