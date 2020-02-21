const sequencia =  {
    _valor : 1, //convenção, mostra q este atributo não será modificado internamente
    get valor() {return this._valor++},
    set valor(valor){this._valor = valor}
}
console.log(sequencia.valor, sequencia.valor)