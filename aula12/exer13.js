var agora = new Date()
var semdia = agora.getDay()
/*
    0 = domingo
    1 = segunda
    2 = terç
    3 = quarta
    4 = quinta
    5 = sexta
    6 = sábado
*/
console.log(semdia)
switch(semdia){
    case 0:
        console.log('domingo')
        break
    case 1:
        console.log('segunda')
        break
    case 2:
        console.log('terça')
        break
    case 3:
        console.log('quarta')
        break
    case 4:
        console.log('quinta')
        break
    case 5:
        console.log('sexta')
        break
    case 6:
        console.log('sábado')
        break
    default:
        console.log('[ERRO] Dia Invalido!')
        break

}