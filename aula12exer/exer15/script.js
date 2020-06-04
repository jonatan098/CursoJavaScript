function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        if (fsex[0].checked){
            genero = 'Homen'
            if (idade >= 0 && idade <= 10){
                //criança
                img.setAttribute('src', 'criançaman.png')
            }else if (idade < 21){
                //jovem
                img.setAttribute('src', 'jovemman.png')
            }else if (idade < 50){
                //adulto
                img.setAttribute('src', 'adultoman.png')
            }else{
                //idoso
                img.setAttribute('src', 'velhoman.png')
            } 
        }else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade <= 10){
                //criança
                img.setAttribute('src', 'criançawoman.png')
            }else if (idade < 21){
                //jovem
                img.setAttribute('src', 'jovemwoman.png')
            }else if (idade < 50){
                //adulto
                img.setAttribute('src', 'adultowoman.png')
            }else{
                //idoso
                img.setAttribute('src', 'velhowoman.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}