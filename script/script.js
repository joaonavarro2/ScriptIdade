function verificar(){
    var data  = new  Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('text')
    var res = document.querySelector('div#res')

    if(fano.value.length == 0  || Number(fano.value > ano)){
            window.alert('[Error] verificar os dados e tente novamente')
    } 
    else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero =""
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >=0 && idade < 5){
                // Bebê
                img.setAttribute('src','imagens/bbM.jpg')
            } else if (idade < 15){
                // Criança
                img.src = 'imagens/criançamm.jpg'
            } else if(idade < 25){
                // jovem
                img.src ='imagens/jovemM.jpg'
            } else if (idade < 50){
                // Adulto
                img.src = 'imagens/adulto.jpg'
            } else {
                // idoso
                img.src = 'imagens/idoso.jpg'
            }
        } else if (fsex[1].checked){
            genero = 'Mulher'
            if(idade >=0 && idade < 5){
                // Bebê
                img.src = 'imagens/bebeM.jpg'
            } else if (idade <15){
                // Criança
                img.src = 'imagens/criançaM.jpg'
            } else if(idade < 25){
                // jovem
                img.src ='imagens/jovemMm.jpg'
            } else if (idade < 50){
                // Adulto
                img.src = 'imagens/adulta.jpg'
            } else {
                // idoso
                img.src = 'imagens/idosa.jpg'
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }




}