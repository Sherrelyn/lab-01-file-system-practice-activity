const fs = require ('fs');

const write = function (data = 'nothing') {

fs.writeFileSync('Tasks.txt', data);

}
module.exports = write;