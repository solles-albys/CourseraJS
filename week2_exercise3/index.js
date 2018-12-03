// Телефонная книга
var phoneBook = {};

/**
 * @param {String} command
 * @returns {*} - результат зависит от команды
 */
module.exports = function (command) {
    var params = command.split(' ');
    switch (params[0]) {
        case 'ADD':
            operationAdd(params[1], params[2]);
            return;
        case 'REMOVE_PHONE':
            return operationRemove(params[1]);
        case 'SHOW':
            return operationShow();
    };
};

function operationAdd(name, phones) {
    phones = phones.split(',');
    if (phoneBook.hasOwnProperty(name)) {
        phoneBook[name] = phoneBook[name].concat(phones);
        return;
    };
    phoneBook[name] = phones;
    var ordered = {};
    Object.keys(phoneBook).sort().forEach(function (key) {
        ordered[key] = phoneBook[key];
    });
    phoneBook = ordered;
}

function operationRemove(phone) {
    var deleted = false;
    Object.keys(phoneBook).forEach(function (key, index) {
        var i = phoneBook[key].indexOf(phone);
        if (i !== -1) {
            phoneBook[key].splice(i,1);
            if (phoneBook[key].length === 0) {
                delete phoneBook[key];
            }
            deleted = true;
            return;
        }
    });
    return deleted;
};

function operationShow() {
    var result = [];
    Object.keys(phoneBook).forEach(function (value, index) {
        result.push(value + ': ' + phoneBook[value].join(', '));
    });
    return result;
}
