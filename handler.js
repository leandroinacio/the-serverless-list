'use strict';

module.exports.fetch = async event => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'FETCH The Daily CY&D is up and running!',
        input: event,
      },
      null,
      2
    ),
  };  
};

module.exports.view = async event => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'VIEWThe Daily CY&D is up and running!',
        input: event,
      },
      null,
      2
    ),
  };  
};
