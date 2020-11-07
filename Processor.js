class Processor{

    static Process(data) {
        var fileData = data.split("\r\n")
        var rows = []

        fileData.forEach(row => {
            var arr = row.split(",")
            rows.push(arr)
        });
        return rows
    }

}

module.exports = Processor