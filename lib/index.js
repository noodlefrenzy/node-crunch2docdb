var util = require('util'),
    Cruncher = require('./cruncher');

if (!process.env.CRUNCHBASE_API_KEY) {
  throw new Error('Must specify CRUNCHBASE_API_KEY environment variable');
}

if (process.argv.length <= 2) {
  throw new Error('Must specify an organization to look for');
}

var crunch = new Cruncher(process.env.CRUNCHBASE_API_KEY);

process.argv.slice(2).forEach(function (org) {
  console.log('Looking for ' + org);
  crunch.findOrganization(org, function (error, results) {
    if (error) {
      console.log('Error looking for ' + org + ': ', error);
    } else {
      console.log(util.inspect(results, { depth: null }));
    }
  })
});
