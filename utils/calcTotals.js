function calcWageByHour (hours, wagePerhour) {
    let total = 0;
    total = hours * wagePerhour; 
    return total;  
}

function calcTotal (hours, wagePerhour, tips) {
        return calcWageByHour(parseFloat(hours), parseFloat(wagePerhour)) + parseFloat(tips); 
}







module.exports = {calcWageByHour, calcTotal};