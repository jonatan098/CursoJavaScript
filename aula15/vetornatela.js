let num = [8,3,5,2,6,9]
/*
for(let c = 0; c < num.length; c++){
    console.log(`A posição ${c} tem o valor ${num[c]}`)
}

num.push(x) //coloca o número x na ultima posição 
num.length //mostra o número de elemenos
num.sort() //coloca os números em ordem crescente
num.indexOf(x) // verificar se tem o número x na lista é retorna a posição. caso não exista retorna -1
*/
for(let c in num){
    console.log(`A posição ${c} tem o valor ${num[c]}`)
}
