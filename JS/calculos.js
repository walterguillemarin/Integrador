function calcular (){
    let porcentaje = 0
    let cantidad = document.getElementById("inputCantidad").value
    let total  = document.getElementById("valorTicket").textContent
    let categoria  = document.getElementById("categoria").value

    switch(categoria){
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
    // Aplico el descuento al valor ticket.
    total-=total*porcentaje/100
    // Multiplico valor ticket ( con descuento) por la cantidad.
    total=total*cantidad
    // Asigno el valor total.
    document.getElementById("total").innerHTML = `Total a Pagar $ ${total} `
}

