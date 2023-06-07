addToppingOptions = () => {
    for(let i = 0; i < toppingOptions.length; i++){
        
        
        let toppingArea = document.getElementById('toppingArea');
        let toppingLower = toppingOptions[i].topName.toLowerCase();
        
        toppingArea.innerHTML += `
        
        <div class="top-check">
                  <input class="form-check-input" name="toppings" type="checkbox" value="${toppingLower}" id="${toppingLower}" data-cost="${toppingOptions[i].topCost}">
                  <label class="form-check-label" for="${toppingLower}">
                    ${toppingOptions[i].topName}
                  </label>
                </div>
        
        `
    }
}

addSauceOptions = () => {

    for(let i = 0; i < sauceOptions.length; i++){
        
        
        let sauceArea = document.getElementById('sauceArea');
        let lower = sauceOptions[i].topName.toLowerCase();

        console.log(sauceOptions[i].topCost + sauceOptions[i].topName + lower);
        
        sauceArea.innerHTML += `
        
        <div class="top-check">
                  <input class="form-check-input" name="toppings" type="checkbox" value="${lower}" id="${lower}" data-cost="${sauceOptions[i].topCost}">
                  <label class="form-check-label" for="${lower}">
                    ${sauceOptions[i].topName}
                  </label>
                </div>
        
        `
    }

}

addDrinkOptions = () => {

    for(let i = 0; i < drinkOptions.length; i++){
        
        
        let drinkArea = document.getElementById('drinkArea');
        let lower = drinkOptions[i].topName.toLowerCase();

        console.log(drinkOptions[i].topCost + drinkOptions[i].topName + lower);
        
        drinkArea.innerHTML += `
        
        <div class="top-check">
                  <input class="form-check-input" type="radio" name="baseRadio" value="${lower}" id="${lower}" data-cost="${drinkOptions[i].topCost}">
                  <label class="form-check-label" for="${lower}">
                    ${drinkOptions[i].topName}
                  </label>
                </div>
        
        `
    }

}

makeSub = () => {

    let subTotal = 0;

    let subName = document.getElementById("subName")
    let 
}