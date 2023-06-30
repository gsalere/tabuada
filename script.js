//calcular tabuada de todos os numeros
function tabuada(){
    var n = document.getElementById('tab')
    
    var caixa = document.getElementById('caixa')
    var resultado = 0

    if(n.value.length == 0){
        alert("Por favor, insira um valor!")
    }else{
        var n1 = Number(n.value)
        caixa.innerHTML=''
        for(i = 1; i<=10; i++){
            resultado = n1 * i
            var sel = document.createElement('option')
            sel.text = `${n1} x ${i} = ${resultado}`  
            caixa.appendChild(sel)
        }
    }

    
}
