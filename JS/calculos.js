function calcular (){
    let valorTicket = document.getElementById("valorTicket")
    let total = valorTicket.textContent
    let categoria = document.getElementById("categoria")
    let valor = categoria.value
    switch(valor){
        case "1": 
            porcentaje  = 80
            break;    
        case "2":
            porcentaje  = 50
            break;    
        case "3":
            porcentaje  = 15
            break;    
    }
    total-=total*porcentaje/100
    document.getElementById("total").innerHTML = `Total a Pagar $ ${total} `
}

