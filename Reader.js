const fs = require('fs')
const util = require('util')

class Reader{

    constructor() {
        // transformando a função readFile em uma promisse
        this.reader = util.promisify(fs.readFile);
    }

    async Read(filePath){
        try {
            return await this.reader(filePath, 'utf8')

        } catch(err) {
            return undefined;
        }
    }
}

module.exports = Reader