var crunchbase = require('crunchbase2');

module.exports = function (apiKey) {
    crunchbase.init(apiKey);

    return {
        key: apiKey,
        findOrganization: function (queryTerm, cb) {
            crunchbase.organizations( { query: queryTerm }, cb);
        }
    };
};
