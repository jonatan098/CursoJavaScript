function tabuada(){
    var txtnum = document.getElementById('txtnum')
    var tab = document.getElementById('seltab')
    if(txtnum.value.length == 0){
        window.alert('[ERRO] Por favor. digite um número')
    }else{
        var num = Number(txtnum.value)
        tab.innerHTML = ''
        for(var c = 0; c <= 10; c++){
            let item =document.createElement('option')
            item.text = `${num} x ${c} = ${num * c}`
            tab.appendChild(item)
        }
    }
}