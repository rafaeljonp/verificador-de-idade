function verificar () { 
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano ) {       
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 4) {
                // Bebe
                img.setAttribute('src', 'bebehomem.png')
            } else if (idade < 14) {
                // Criança
                img.setAttribute('src', 'criancahomem.png')
            } else if (idade < 30) {
                // Jovem
                img.setAttribute('src', 'juvemhomem.png')
            } else if (idade < 59) {
                // Adulto
                img.setAttribute('src', 'homemadulto.png')
            } else if (idade < 99) {
                // Idoso
                img.setAttribute('src', 'idoso.png')
            } else {
                // Falecido
                img.setAttribute('src', 'esqueleto.png')
            }        
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 4) {
                //bebe
                img.setAttribute('src', 'bebemulher.png')
            } else if (idade < 14) {
                //criança
                img.setAttribute('src', 'criancamulher.png')
            } else if (idade < 30) {
                //jovem
                img.setAttribute('src', 'jovemmulher.png')
            } else if (idade < 59) {
                //adulto
                img.setAttribute('src', 'mulheradulta.png')
            } else if (idade < 99) {
                //idoso
                img.setAttribute('src', 'idosa.png')
            } else {
                //falecido
                img.setAttribute('src', 'esqueleto.png')
            }  
        }
         
         res.innerHTML = `Detectamos ${gênero} com ${idade} anos.` 
         res.appendChild(img) 
     
         
    }

}