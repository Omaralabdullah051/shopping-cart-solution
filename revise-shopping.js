function updatePhone(product, isAdd, price) {
    const input = document.getElementById(product + '-input');
    let inputNumber = parseFloat(input.value);
    if (isAdd == true) {
        inputNumber = inputNumber + 1;
    }
    else if (isAdd == false && inputNumber > 0) {
        inputNumber = inputNumber - 1;
    }
    input.value = inputNumber;
    const perPrice = document.getElementById(product + '-price');
    perPrice.innerText = inputNumber * price;
    totalCalculation();
}


function totalCalculation() {
    const casePrice = document.getElementById('case-price').innerText;
    const phonePrice = document.getElementById('phone-price').innerText;
    const subtotal = document.getElementById('sub-total');
    const subtotalAmount = parseFloat(casePrice) + parseFloat(phonePrice);
    subtotal.innerText = subtotalAmount;
    const tax = document.getElementById('tax-amount');
    const taxAmount = subtotalAmount * 10 / 100;
    tax.innerText = taxAmount;
    const totalPrice = document.getElementById('total-price');
    totalPrice.innerText = subtotalAmount + taxAmount;
}

function onClick(itemId, updateId, isAdd, price) {
    document.getElementById(itemId).addEventListener('click', function () {
        updatePhone(updateId, isAdd, price);
    })
}

onClick('phone-plus', 'phone', true, 1219);
onClick('phone-minus', 'phone', false, 1219);
onClick('case-plus', 'case', true, 59);
onClick('case-minus', 'case', false, 59);

