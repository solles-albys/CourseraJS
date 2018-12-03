/**
 * @param {Number} hours
 * @param {Number} minutes
 * @param {Number} interval
 * @returns {String}
 */
module.exports = function (hours, minutes, interval) {
    var m = minutes + interval;
    var h = hours + Math.floor(m / 60);
    m = Math.floor(m % 60);
    m = String(m);
    if (m.length === 1) {
        m = '0' + m;
    }
    while (h >= 24) {
        h -= 24;
    }
    h = String(h);
    if (h.length === 1) {
        h = '0' + h;
    }
    return h + ':' + m;
};
