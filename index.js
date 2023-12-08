let total = 0;
function getTitleAndPrices(target){
    const cardsSelector = target.parentNode.childNodes[1].childNodes[3].childNodes[3].innerText;
    console.log(cardsSelector);
    const selectedItemContainer = document.getElementById('selected-item');
    const li = document.createElement('li');
    li.classList.add('list-decimal');
    li.innerText = cardsSelector;
    selectedItemContainer.appendChild(li);

    const price = target.parentNode.childNodes[1].childNodes[3].childNodes[5].innerText.split(' ')[0];
    total = parseFloat(price) + parseFloat(total);
    if(total > 0){
        const purchaseButton = document.getElementById('btn-purchase');
        purchaseButton.removeAttribute('disabled');
    }
    if(total >= 5000){
        const btnApply = document.getElementById('btn-apply');
        btnApply.removeAttribute('disabled') 
    }
    const totalPrice = document.getElementById('total-price');
    totalPrice.innerText = total.toFixed(2);
    document.getElementById('total-price-final').innerText = total.toFixed(2);
}

document.getElementById('btn-apply').addEventListener('click', function(){
    const inputField = document.getElementById('btn-input').value;
    document.getElementById('btn-input').value = '';
    if(inputField === 'SELL5000'){
        const discountPrice = document.getElementById('discount-price');
        let discount = 0;
        const discountPriceFinal = (total * 20) / 100;
        // console.log(discountPrice);
        discount = parseFloat(discountPriceFinal) + parseFloat(discount);
        discountPrice.innerText = discount.toFixed(2);
        const totalPriceFinal = document.getElementById('total-price-final');
        totalPriceFinal.innerText = (total - discountPriceFinal).toFixed(2);
    }
})

document.getElementById('go-btn').addEventListener('click', function(){
    window.location.href = 'index.html';
})
