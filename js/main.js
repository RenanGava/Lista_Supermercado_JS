var itens = []

document.querySelector('input[type=submit]')
.addEventListener('click', ()=>{
    const nomeProduto = document.querySelector('input[name=nome_produto]')
    const PrecoProduto = document.querySelector('input[name=valor_produto]')
    const Total = document.querySelector('.soma-produto')

    itens.push({
        nome:nomeProduto.value,
        valor:PrecoProduto.value
    })

    /*
    <div class="lista-produto-single">
        <h3>Redbull</h3>
        <h3 class="price-produto"><span>R$20,00</span></h3>
    </div>
    */
    const listaProdutos = document.querySelector('.lista-produtos')
    listaProdutos.innerHTML = ''
    itens.map((value, index) =>{
        listaProdutos.innerHTML += `
        <div class="lista-produto-single">
            <h3>${value.nome}</h3>
            <h3 class="price-produto"><span>R$${value.valor}</span></h3>
        </div>
        `
    })
    var total = 0
    
    if(total == 0){
        itens.forEach((val)=>{
            let valor = parseFloat(val.valor) 
            total += valor
        })
        Total.innerHTML = `<h1>Total: R$ ${total.toFixed(2)}</h1>`
        
    }
    
    nomeProduto.value = ''
    PrecoProduto.value = ''
    
})

document.querySelector('button[name=esvaziar]')
.addEventListener('click',()=>{
    setTimeout(() => {
        itens = []
    const listaProdutos = document.querySelector('.lista-produtos').innerHTML = ''
    const Total = document.querySelector('.soma-produto').innerHTML = '<h1>R$ 0,00</h1>'
    }, 500);
})

function apagar(item){
    alert(item)
}