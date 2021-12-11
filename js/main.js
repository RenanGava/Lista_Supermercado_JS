var itens = []
var id = 0

document.querySelector('input[type=submit]')
.addEventListener('click', ()=>{
    const nomeProduto = document.querySelector('input[name=nome_produto]')
    const PrecoProduto = document.querySelector('input[name=valor_produto]')

    itens.push({
        id: id,
        nome: nomeProduto.value,
        valor: PrecoProduto.value
    })
    render()
    CalcularTotal()
    
    nomeProduto.value = ''
    PrecoProduto.value = ''
    itens.id = id++
    
})

function CalcularTotal(){
    const Total = document.querySelector('.soma-produto')
    var total = 0
    console.log(itens);
    if(total == 0){
        itens.forEach((val)=>{
            let valor = parseFloat(val.valor) 
            total += valor
        })
        Total.innerHTML = `<h1>Total: R$ ${total.toFixed(2)}</h1>`
    }
}

function render(){
    const listaProdutos = document.querySelector('.lista-produtos')
    listaProdutos.innerHTML = ''
    return (
        itens.map((value, index) =>{
        listaProdutos.innerHTML += `
        <div class="lista-produto-single">
            <h3>${value.nome}</h3>
            <h3 class="price-produto"><span>R$${value.valor}</span></h3>
            <input class="apagar" type="button" id='${index}' value="X" onclick="apagar(${index})">
        </div>
        `
    }))
}

document.querySelector('button[name=esvaziar]')
.addEventListener('click',()=>{
    setTimeout(() => {
        itens = []
        const listaProdutos = document.querySelector('.lista-produtos').innerHTML = ''
        const Total = document.querySelector('.soma-produto').innerHTML = '<h1>R$ 0,00</h1>'
    }, 500);
})

function apagar(item){
    itens.splice(item, 1)
    render()
    CalcularTotal()
}