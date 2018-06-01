// let piggyBank = {quarters:24, nickels:32, dimes:65, pennies:96};
// quarterValue = piggyBank.quarters / 4;
// nickelValue = piggyBank.nickels / 20;
// dimeValue =  piggyBank.dimes / 10;
// pennyValue = piggyBank.pennies / 100;


// let dollarAmount = quarterValue + nickelValue + dimeValue + pennyValue;
// console.log(dollarAmount);

// const dollarAmount = 15.06;
// const piggyBank = {};
// piggyBank.quarters = 24;
// piggyBank.nickels = 32;
// piggyBank.dimes = 65;
// piggyBank.pennies = 96;
// console.log(piggyBank);
const scores = [82, 71, 62, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87, 60]
const grades = {
    a: 0,
    b: 0,
    c: 0,
    d: 0,
    f: 0
};
for (i = 0; i < scores.length; i++){
    if (scores[i] >= 91){
        grades.a += 1;
    }
    else if (scores[i] >= 81 && scores[i] <= 90){
        grades.b += 1;
    }
    else if (scores[i] >= 71 && scores[i] <= 80){
        grades.c += 1;
    }
    else if (scores[i] >= 61 && scores[i] <= 70){
        grades.d += 1;    
    }
    else {
        grades.f += 1;
    }
    
}
for (let x in grades){
    console.log (`${x}: ${grades[x]}`);
    let currentGradeCount = grades[x];
    if (currentGradeCount > grades["a"]){
        console.log(`${currentGradeCount} is the most amount`)
    }
}