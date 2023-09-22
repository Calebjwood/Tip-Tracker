function calcWageByHour (hours, wagePerhour) {
    let total = 0;
    total = hours * wagePerhour; 
    return total;  
}

function calcTotal (hours, wagePerhour, tips) {
        return calcWageByHour(parseFloat(hours), parseFloat(wagePerhour)) + parseFloat(tips); 
}











/**
 * sum all tips
 * @param {array} tips 
 * @return {number}
 */

/**
 * caculates total money earned for the day
 * @param {number} hours 
 * @param {number} wagePerhour 
 * @param {number} tips 
 * @returns {number}
 */




module.exports = {calcWageByHour, calcTotal};