function calcWageByHour (hours, wagePerhour) {
    let total = 0;
    total = hours * wagePerhour; 
    return total;  
}

/**
 * sum all tips
 * @param {array} tips 
 * @return {number}
 */
function totalTips (tips) {
    let total = 0; 
    for(let i = 0; i < tips.length; i++) {
        total += tips[i];
    }
    return total; 
}

/**
 * caculates total money earned for the day
 * @param {number} hours 
 * @param {number} wagePerhour 
 * @param {number} tips 
 * @returns {number}
 */
function totalMoney (hours, wagePerhour, tips) {
return calcWageByHour(hours, wagePerhour) + totalTips(tips);
}



module.exports = {calcWageByHour, totalTips, totalMoney};