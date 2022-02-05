//tambien puede ser function getRandonNumber(size)
//obtengo un numero random dentro del tamaño de la foto
let getRandomNumber = size =>{
  return Math.floor(Math.random() * size)  
}

/*saca la diferencia entre el punto aleatorio y donde se da click
 atraves de pitagoras*/
let getDistance = (e, target) => {
    let diffX = e.offsetX - target.x;
    let diffY = e.offsetY - target.y;
    return Math.sqrt((diffX * diffX) + (diffY * diffY));
}

// pistas

let getDistanceHint = distance => {
    if (distance < 30) {
        return "Hirviendo!";
    } else if (distance < 40){
        return "Muy caliente";
    } else if (distance < 60){
        return "Caliente";
    } else if (distance < 100){
        return "Tibio";
    } else if (distance < 180){
        return "Frio";
    } else if (distance < 360){
        return "Muy frio";
    } else {
        return "Congelado";
    }

}