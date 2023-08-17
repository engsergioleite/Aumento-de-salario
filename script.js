function calc(){
    
    var nome = document.getElementById('nome').value
    var sal = Number(document.getElementById('sal').value) //declara a var Number, acessa elemento via ID, pega valor do form, fixa 2 casas decimais e troca ponto por virgula
    var res = document.getElementById('relatorio')
    var aum = 0;
    var perc = 0;
    var saln = 0;
 

    if (sal <= 280) {
        perc = 20
        aum = (sal*perc)/100
        
    } else if (sal > 280 && sal < 700) {
        perc = 15
        aum = (sal*perc)/100
        
    } else if (sal > 700 && sal < 1500) {
        perc = 10
        aum = (sal*perc)/100
        
    } else if (sal > 1500) {
        perc = 5
        aum = (sal*perc)/100

    } 

    saln = (sal + aum)
    
    res.innerHTML = `O salário do ${nome} era de ${sal.toFixed(2).replace('.',',')} e foi aplicado o aumento de ${perc}%, gerando um aumento de ${aum.toFixed(2).replace('.',',')} e o total será ${saln.toFixed(2).replace('.',',')}`    

}