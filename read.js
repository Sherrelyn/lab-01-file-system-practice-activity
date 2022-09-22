const fs = require('fs');
const read = function () {
    return fs.readFileSync('./Tasks.txt',
    {
        encoding: 'utf8',
        flag: 'r'
    }
    )
}
module.exports = read;