class Table {

    constructor(arr) {
        //adicionando primeira linha do array como cabeçalho
        this.header = arr[0];
        //removendo a primeira linha do array para que sobre somente os dados
        arr.shift();
        this.rows = arr;
    }

    get RowCount(){
        return this.rows.length
    }

    get ColumnsCount() {
        return this.header.length
    }

}   

module.exports = Table