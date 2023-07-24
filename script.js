function contar() {

    let ini = document.getElementById('i')
    let fim = document.getElementById('f')
    let passo = document.getElementById('p')
    let res = document.getElementById('res')
    if (ini.value == 0 || fim.value == 0 || passo.value == 0) {
        //window.alert('[ERRO] falta de dados')
        res.innerHTML = ('Impossivel contar')
    } else {
        res.innerHTML = 'contador:'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if(i < f) {
            //contagem crescente
            for (let c = i; c <= f; c += p) {
            res.innerHTML += ` ${c} 👉` 
            }         
        } else {
            //contagem regresiva
           for(let c = i; c >= f; c -= p) {
               res.innerHTML += `${c} 👉`
           } 
        }
        res.innerHTML += ('🏁')          
    }
}