var agora = new Date()
var hora = agora.getHours()
var min = agora.getMinutes()
console.log(`são extamente ${hora} horas : ${min} minutos.`)
if (hora < 12){
    console.log('bom dia!')
}else if (hora < 18){
    console.log('boa tarde!')
}else{
    console.log('boa noite!')
}