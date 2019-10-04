// Mocked news
getReports = () => {
        return [{
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
};

const orderByViews = (reportA, reportB) => reportB.views - reportA.views;

module.exports.fetchReports = () => {
    return getReports().sort(orderByViews);
};

module.exports.viewReport = reportId => {
    const report = getReports().find((current) => current.id == reportId);
	report.views++;
	return report;
};