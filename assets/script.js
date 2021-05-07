

function checkifNaN(x) {
    if (isNaN(x)) {
      return NaN;
    }
    return x;
  }

//console.log(checkifNaN('1'));

//  Variables 'hoisted' to global level to be visible across independent functions - refer to Mentor / Support if this is the correct approach??

let minerClass = document.getElementById('miner-class').innerText;
let minerChance = parseInt(document.getElementById('miner-chance').innerText);
let minerPowerConsumption = parseInt(document.getElementById('miner-consumption').innerText);
let powerRate = parseInt(document.getElementById('power-rate').innerText);
console.log("1. onload minerChance =", minerChance);
// console.log(checkifNaN(minerChance));
console.log("2. onload powerUsage =", minerPowerConsumption);
// console.log(checkifNaN('minerPowerConsumption'));
console.log("3. onload powerRate =", powerRate);
// console.log(checkifNaN(powerRate));

let blockSuccess;
    
// Wait until DOM loaded before populating default Mining Device Stats
// Populate Default Chance & Power Consumption Stats 

document.addEventListener("DOMContentLoaded", function () {
    
    if (minerClass.includes('Level 0')) {
        minerChance = 25;                                                // Hard-coded - to be balanced !! 
        minerPowerConsumption = 10;                                      // Hard-coded - to be balanced !! 
        powerRate = 1;                                                   // Hard-coded - to be balanced !! 
        
    } else (console.log("ALERT! - Miner Class Not Found"));
    
    document.getElementById("miner-chance").innerText = minerChance;
    document.getElementById("miner-consumption").innerText = minerPowerConsumption;
    document.getElementById("power-rate").innerText = powerRate;

    console.log("4. updated minerChance =", minerChance);
   //  console.log(checkifNaN(minerChance));
    console.log("5. updated powerUsage =", minerPowerConsumption);
   //  console.log(checkifNaN(minerPowerConsumption));
    console.log("6.updated powerRate =", powerRate);
    // console.log(checkifNaN(powerRate));
});


// Add Event listener for upgrade button

// Device upgrades A - User Selection

// Device upgrades B - Update Gameplay Stats

// Device upgrades C - Update Balance (post transaction)


// Event listener for run game button (initiate game cycle stages)

let play = document.getElementById('btn-play');
play.addEventListener('click', mineBlock);

function mineBlock (event) {
    console.log("7. game round started / btn id =", this.id);
    document.getElementById("terminal-status").innerText = "Activated";  

    
    // Game stage A(i) - generate miner ID / Key and display in Game Panel  
    
    let minerId = parseInt(document.getElementById('terminal-key-device1').innerText);
    minerId = 5;                                                                // ---------- [For Baseline version miner value fixed @ 5]
    document.getElementById("terminal-key-device1").innerText = minerId;
    
    console.log("8. minerId =", minerId);
    // console.log(checkifNaN(minerId));
    console.log("9. minerChance =", minerChance);
    // console.log(checkifNaN(minerChance));
    
    // Game stage Aii - generate block ID
    
    let blockId = Math.floor(Math.random() * minerChance) + 1;
    document.getElementById("terminal-key-block1").innerText = blockId;
    console.log("10. blockId =", blockId);
    // console.log(checkifNaN(blockId));

    
    // Game stage B - check if block ID matches miner ID
   
    blockSuccess = minerId === blockId;         // wil return true or false 
    
    console.log("11. blockSuccess =", blockSuccess);
    // console.log(checkifNaN(blockSuccess));
    

    // Game Stage D - Calculate Outcome 

    let subTotal = calcSubTotal ();                                           // subTotal hoisted out of code-block so as it can be seen / within scope of function which updates balance (but demoted from global as caused an undefined error - likely due to sequencing?
    // calcSubTotal ();
            
    function calcSubTotal (subTotal) {
     
        let roundCost = calcRoundCost();  
        console.log("15. RoundCost[D] =", roundCost);       
        // console.log(checkifNaN(roundCost));

        let roundWin = calcRoundWin();
        console.log("17. RoundWin[D] =", roundWin);         
        // console.log(checkifNaN(roundWin));

        let i = roundWin - roundCost;
        console.log("18. subTotal[D] =", i);         
        // console.log(checkifNaN(i));
        return subTotal = i;
    };

    endRoundUpdateBalance ();

    // Game Stage D - Calculate Outcome 

   // Update Balance E - (post game-cycle)
        
    function endRoundUpdateBalance () {

        
        let oldBalance = parseInt(document.getElementById('balance-current').innerText);   
        console.log("19. oldBalance [E]= ", oldBalance);                                              
        // console.log(checkifNaN(oldBalance));
    
        console.log("20. subTotal [E]", subTotal);                                                      //not being returned as a value(?)
        // console.log(checkifNaN(subTotal));
        
        let newBalance = 0;
        newBalance = oldBalance + subTotal;
        document.getElementById('balance-current').innerText = newBalance;  
        console.log("21. newBalance [E]", newBalance);                                                  //not being returned as a value(?)
        // console.log(checkifNaN(newBalance));
    };
}

    // Game Stage Ci - Calculate costs

function calcRoundCost (roundCost) {
    roundCost = minerPowerConsumption * powerRate;
    
    console.log("12. PowerConsumption[C] =", minerPowerConsumption);
    // console.log(checkifNaN(minerPowerConsumption));
    console.log("13. PowerRate[C] =", powerRate);
    // console.log(checkifNaN(powerRate));
    console.log("14. RoundCost[C] =", roundCost);
    // console.log(checkifNaN(roundCost));
    
    return roundCost;
    }
        
        
      // Game Stage Cii - Calculate win

function calcRoundWin (roundWin) {
    if (blockSuccess) {
    ii = +100;                        // checks if true (block mined) adds 100
    } else {
    ii = 0;                           // checks if false (not mined) remains 0
    } 
    console.log("16. RoundWin[C]=", ii);
    // console.log(checkifNaN(ii));
    return roundWin = ii;                          
    }




// Reset variables for new round(?)

//create template literals for terminal window messages


// Temporary - test feture button

//let test = document.getElementById('btn-test1');
//test.addEventListener('click', endRoundUpdateBalance);


