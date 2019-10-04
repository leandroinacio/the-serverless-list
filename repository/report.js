const mongoose = require('mongoose');
const Report = require('../model/report');

// Db connection status
mongoose.Promise = global.Promise;
let isConnected;

// I would add some logs to track possible errors
const connectToDatabase = () => {
    if (isConnected) {
        return Promise.resolve();
    }
    return mongoose.connect(process.env.DB).then(
        db => {
            isConnected = db.connections[0].readyState;
        }
    );
};

module.exports.viewReport = reportId => {
    return connectToDatabase().then(() => {
        console.log('key: ' + reportId)
        return Report.findOne({ 'key': reportId });
    });
};

module.exports.updateReport = report => {
    return connectToDatabase().then(() => {
        return report.save();
    });
};

module.exports.fetchReports = () => {
    console.log('fetch reports repository');
    return connectToDatabase().then(() => {
        return Report.find({}, null, {sort: {views: -1}});
    });
};

module.exports.mockNews = () => {
    console.log('Mocking news');
    const mockedNews = [
        {
            key: 1,
            title: 'Spider-man is a Menace!',
            views: 1
        },
        {
            key: 2,
            title: 'Los pollos hermanos',
            views: 3
        },
        {
            key: 3,
            title: 'Weather today',
            views: 2
        }
    ];
    connectToDatabase().then(async () => {
        Report.create(mockedNews).then(() => { 
            console.log('News mocked with sucess');
        });
    })
};