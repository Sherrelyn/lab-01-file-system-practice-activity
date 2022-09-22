const fs = require ('fs');

const write = function (data = 'nothing') {

fs.writeFileSync('notes.txt', data);

}
module.exports = write;