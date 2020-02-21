//Obeject.preventExtensions

const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})
console.log('Extensível:', Object.isExtensible(produto)) // com o preventExtensions você pode anular qualquer adição de atributo.

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tag
console.log(produto)

//Object.Seal

const pessoa = {nome: 'Juliana', idade: 35}
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa)) // com o seal, voce nao pode nem excluir nem adicionar um atributo, mas pode editar

delete pessoa.nome
pessoa.sobrenome = 'Silva'
pessoa.idade = 29
console.log(pessoa)

//Com o object.freeze, o objeto se torna nulo a mudanças, ou seja, não pode ser modificado.
