function updateProductNumber(product, price, isIncreasing) {
    const productInput = document.getElementById(product + '-number');
    let produnctNumber = productInput.value;
    if (isIncreasing == true) {
        produnctNumber = parseInt(produnctNumber) + 1;
    }
    else if (produnctNumber > 0) {
        produnctNumber = parseInt(produnctNumber) - 1;
    }
    productInput.value = produnctNumber;
    //update total
    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = produnctNumber * price;
    //calculate total
    calculateTotal();

}
function getInputValue(product) {
    const productInput = document.getElementById(product + '-number');
    const productNumber = parseInt(productInput.value);
    return productNumber;
}

function calculateTotal() {
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 10;
    const totalPrice = subTotal + tax;
    //update on the html 
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-price').innerText = totalPrice;
}
//phone increase and decrease events
document.getElementById('phone-plus').addEventListener('click', function () {
    updateProductNumber('phone', 1219, true);
})
document.getElementById('phone-minus').addEventListener('click', function () {
    updateProductNumber('phone', 1219, false);
})

//handle case increase and decrease event
document.getElementById('case-plus').addEventListener('click', function () {
    updateProductNumber('case', 59, true);
})

document.getElementById('case-minus').addEventListener('click', function () {
    updateProductNumber('case', 59, false);
})