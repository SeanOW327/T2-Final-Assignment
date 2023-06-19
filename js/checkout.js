let checkTotal = 0;


displayCheck = () => {
    let totalArea = document.getElementById('totalOut');
    let data = JSON.parse(localStorage.getItem('order'));
    let items = document.getElementById('checkoutOrder');
    

    for(let i = 0; i < data.length; i++ ){

        let name = data[i].subLabel;
        let bread = data[i].subBread;
        let toppings = data[i].subTopping;
        let sauce = data[i].subSauce;
        let drink = data[i].subDrink;
        let price = data[i].subPrice; 

        checkTotal += price;

        items.innerHTML += `
        
        <div class="order">
            <div class="order-name">${name}</div>
            <div class="short-detail">
                <div class="item"> <strong> Bread: </strong>  ${bread} </div>
                <div class="item"> <strong> Sauce: </strong> ${sauce.join(", ")} </div>
                <div class="item"> <strong> Drink: </strong> ${drink} </div>
            </div>
            <div class="short-detail">
                <div class="item"> <strong> Toppings: </strong> ${toppings.join(", ")} </div>
            </div>
            <div class="item-cost"> <strong>Cost:</strong> R${price}.00 </div>
        </div>`

        totalArea.innerHTML = "R" + checkTotal + ".00";

    }
}

calculatePromo = () => {
    let totalArea = document.getElementById('totalOut');
    let promoCode = document.getElementById("promo").value;
    if(promoCode === "Discount30%"){
        let discount = checkTotal - (checkTotal/100*30);
        totalArea.innerHTML = "R" + discount + ".00";
        alert("Discount code applied!");
    } else alert("This is an invalid discount code!")
}

resetReturn = () => {
    localStorage.removeItem('order');
    window.location.href = '../index.html'
}