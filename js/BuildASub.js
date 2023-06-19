addToppingOptions = () => {
    for(let i = 0; i < toppingOptions.length; i++){
        
        
        let toppingArea = document.getElementById('toppingArea');
        let toppingLower = toppingOptions[i].topName.toLowerCase();
        
        toppingArea.innerHTML += `
        
        <div class="top-check">
                  <input class="form-check-input" name="topCheck" type="checkbox" value="${toppingLower}" id="${toppingLower}" data-cost="${toppingOptions[i].topCost}">
                  <label class="form-check-label" for="${toppingLower}">
                    ${toppingOptions[i].topName}  - R${toppingOptions[i].topCost}.00
                  </label>
                </div>
        
        `
    }
}

addSauceOptions = () => {

    for(let i = 0; i < sauceOptions.length; i++){
        
        
        let sauceArea = document.getElementById('sauceArea');
        let lower = sauceOptions[i].topName.toLowerCase();

      
        
        sauceArea.innerHTML += `
        
        <div class="top-check">
                  <input class="form-check-input" name="sauceCheck" type="checkbox" value="${lower}" id="${lower}" data-cost="${sauceOptions[i].topCost}">
                  <label class="form-check-label" for="${lower}">
                    ${sauceOptions[i].topName}  - R${sauceOptions[i].topCost}.00
                  </label>
                </div>
        
        `
    }

}

addDrinkOptions = () => {

    for(let i = 0; i < drinkOptions.length; i++){
        
        
        let drinkArea = document.getElementById('drinkArea');
        let lower = drinkOptions[i].topName.toLowerCase();

        
        
        drinkArea.innerHTML += `
        
        <div class="top-check">
                  <input class="form-check-input" type="radio" name="drinkRadio" value="${lower}" id="${lower}" data-cost="${drinkOptions[i].topCost}">
                  <label class="form-check-label" for="${lower}">
                    ${drinkOptions[i].topName} - R${drinkOptions[i].topCost}.00
                  </label>
                </div>
        
        `
    }

}

let subOrder = [];

makeSub = () => {

  let subTotal = 0;



  let subName = document.getElementById("subName").value;
  if(subName === ""){
    subName = "Custom Sub";
  }

  let breadOption = document.getElementById("bread").value;
  if(breadOption === "Italian bread - R20.00"){
      subTotal += 20;
    } else if(breadOption === "whole wheat bread - R25.00"){
        subTotal += 25;
        
    } else if(breadOption === "honey oat bread - R30.00"){
        subTotal += 30;
    } else if(breadOption === "Jalepeno cheese bread - R35.00"){
        subTotal += 35;
    } else if(breadOption === "Gluten free bread - R40.00"){
        subTotal += 40;
    } 

  let topOptions = document.getElementsByName("topCheck");
  let topArray = [];
  for(i = 0; i < topOptions.length; i++){
    if(topOptions[i].checked){
        topArray.push(topOptions[i].value);
        subTotal += +topOptions[i].dataset.cost;

    }    
  }
  
  let sauces = document.getElementsByName("sauceCheck");
  let sauceArray = [];
  for(i = 0; i < sauces.length; i++){
    if(sauces[i].checked){
        sauceArray.push(sauces[i].value);
        subTotal += +sauces[i].dataset.cost;

    }    
  }

  let drinks = document.getElementsByName("drinkRadio");
  let drinkValue = "";
  for(i = 0; i < drinks.length; i++){
    if(drinks[i].checked){
      drinkValue = drinks[i].value;
      subTotal += +drinks[i].dataset.cost;

    }    
  }

  if(breadOption === "Select bread"){
    alert("Please select a bread type!")
  } else if(topArray.length < 5){
    alert("Please choose a minimum of 5 toppings!")
  } else if(sauceArray < 1){
    alert("Please choose a minimum of 1 Sauce!")
  } else if(drinkValue === ""){
    alert("Please choose a drink!")
  } else {
    subOrder.push({
      subLabel: subName,
      subBread: breadOption,
      subTopping: topArray,
      subSauce: sauceArray,
      subDrink: drinkValue,
      subPrice: subTotal
    });
    document.getElementById("subForm").reset();
    document.getElementById("currentOrderCost").innerHTML = `<strong>Order Total:</strong> R0.00`;
}

}

addToCart = () => {

  if(subOrder.length === 0){
    alert("Please create your sub and add it to your order!")
  } else {
  let data = JSON.stringify(subOrder);
  localStorage.setItem('order', data);
  window.location.href = 'checkout.html';
  }
  

}


displayOrder = () => {

 

  let area = document.getElementById("orders");
  let total = document.getElementById("subTotal");

  area.innerHTML = "";

  let overallTotal = 0; 

  for(let i = 0; i < subOrder.length; i++){

      let name = subOrder[i].subLabel;
      let bread = subOrder[i].subBread;
      let toppings = subOrder[i].subTopping;
      let sauce = subOrder[i].subSauce;
      let drink = subOrder[i].subDrink;
      let price = subOrder[i].subPrice; 

      overallTotal += price;

      area.innerHTML += `
      <div class="col-4">
      <div class="order-card">
       
        <h3 class="order-name"> ${name}</h3>
        <h4>Bread Type:</h4>
        <p class="order-card-detail"> ${bread} </p>
        <h4>Sub Toppings:</h4>
        <p class="order-card-detail"> ${toppings.join(", ")} </p>
        <h4>Sauces:</h4>
        <p class="order-card-detail"> ${sauce.join(", ")} </p>
        <h4>Drink:</h4>
        <p class="order-card-detail"> ${drink} </p>
        

        <p class="order-card-cost" id="subTotal">R${price}.00</p>
        
      </div>
      
    </div>`

      total.innerHTML = `<strong>Sub Total:</strong> R${overallTotal}.00`

  }
}

currentOrderCost = () => {
  currentOrderPrice = 0;

  let breadOption = document.getElementById("bread").value;
  if(breadOption === "Italian bread - R20.00"){
      currentOrderPrice += 20;
    } else if(breadOption === "whole wheat bread - R25.00"){
        currentOrderPrice += 25;
        
    } else if(breadOption === "honey oat bread - R30.00"){
        currentOrderPrice += 30;
    } else if(breadOption === "Jalepeno cheese bread - R35.00"){
        currentOrderPrice += 35;
    } else if(breadOption === "Gluten free bread - R40.00"){
        currentOrderPrice += 40;
    } 

  let topOptions = document.getElementsByName("topCheck");
  for(i = 0; i < topOptions.length; i++){
    if(topOptions[i].checked){
        currentOrderPrice += +topOptions[i].dataset.cost;
    }    
  }
  
  let sauces = document.getElementsByName("sauceCheck");
  for(i = 0; i < sauces.length; i++){
    if(sauces[i].checked){
        currentOrderPrice += +sauces[i].dataset.cost;
    }    
  }

  let drinks = document.getElementsByName("drinkRadio");
  for(i = 0; i < drinks.length; i++){
    if(drinks[i].checked){
      currentOrderPrice += +drinks[i].dataset.cost;
    }    
  }

  document.getElementById("currentOrderCost").innerHTML = `<strong>Order Total:</strong> R${currentOrderPrice}.00`;

}

