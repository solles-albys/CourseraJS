/**
 * @param {String} tweet
 * @returns {String[]}
 */
module.exports = function (tweet) {
    var arr = tweet.split(' ');

    return arr.reduce(function (acc, word) {
        if (word.startsWith('#')) {
            return acc = acc.concat([word.slice(1)]);
        }
        return acc;
    }, []);
};
