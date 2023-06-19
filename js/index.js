addSubs = () => {
    let monthSub = document.getElementById("subsOfMonth");

    for(let i = 0; i < subsOfTheMonth.length; i++){

        let subLabel = subsOfTheMonth[i].subLabel;
        let subBread = subsOfTheMonth[i].subBread;
        let subTopping = subsOfTheMonth[i].subTopping;
        let subSauce = subsOfTheMonth[i].subSauce;
        let subPrice = subsOfTheMonth[i].subPrice;

        monthSub.innerHTML += `
        
        <div class="col-4">
            <div class="sub-card">
                <img src="/assets/${subLabel}.jpg" width="295">
                <h4 class="sub-name">${subLabel} </h4>
                <p class="sub-details">${subBread} with ${subTopping.join(", ")}, and ${subSauce}.</p>
                <p class="price">R${subPrice}.00</p>
                <div class="buy-button">Buy Sub</div>
            </div>
        </div>
        
        `
    }
}