/**
 * @param {String[]} hashtags
 * @returns {String}
 */
module.exports = function (hashtags) {
    return hashtags.reduce(function (acc, hashtag) {
        if (acc.indexOf(hashtag.toLowerCase()) === -1) {
            acc.push(hashtag.toLowerCase());
        }
        return acc;
    }, []).join(', ')
};
