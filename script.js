let currOne = document.getElementById('curOne');
let currTwo = document.getElementById('curTwo');
let amountOne = document.getElementById('amount1');
let amountTwo = document.getElementById('amount2');

var rateElement = document.getElementById('rate'); 

function calculate() {
    var currencyOne = currOne.value;
    var currencyTwo = currTwo.value;
    fetch(`https://api.exchangerate-api.com/v4/latest/${currencyOne}`)
    .then(res => res.json())
    .then(data => {
        var rate = data.rates[currencyTwo];
        rateElement.innerText = `1 ${currencyOne} = ${rate} ${currencyTwo}`;
        amountTwo.value = (amountOne.value * rate).toFixed(2);
    });
}

currOne.addEventListener('change', calculate);
currTwo.addEventListener('change', calculate);
amountOne.addEventListener('input', calculate);
amountTwo.addEventListener('input', calculate);

calculate();