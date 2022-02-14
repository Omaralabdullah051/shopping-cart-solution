function update(isAdd, product, price) {
    const input = document.getElementById(product + '-input');
    let number = parseInt((input.value));
    if (isAdd == true) {
        number = number + 1;
    }
    else if (isAdd == false && number > 0) {
        number = number - 1;
    }
    input.value = number;
    const priceField = document.getElementById(product + '-price');
    priceField.innerText = number * price;

    totalCalculation();
}
function inputValue(product) {
    const input = document.getElementById(product + '-input');
    const number = parseInt((input.value));
    return number;
}

function totalCalculation() {
    const mobilePrice = inputValue('phone') * 1219;
    const casePrice = inputValue('case') * 59;
    const subtotal = mobilePrice + casePrice;
    const tax = subtotal / 10;
    const totalPrice = subtotal + tax;
    document.getElementById('sub-total').innerText = subtotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-price').innerText = totalPrice;

}


//add event handler on phone
document.getElementById('phone-plus').addEventListener('click', function () {
    update(true, 'phone', 1219);
})
document.getElementById('phone-minus').addEventListener('click', function () {
    update(false, 'phone', 1219);
})




//add event handler on case
document.getElementById('case-plus').addEventListener('click', function () {
    update(true, 'case', 59);
})
document.getElementById('case-minus').addEventListener('click', function () {
    update(false, 'case', 59);
})