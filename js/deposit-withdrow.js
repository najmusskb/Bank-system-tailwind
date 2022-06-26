document.getElementById('deposit-button').addEventListener('click', function () {

    // get the amount deposited
    const DepositInput = document.getElementById('deposit-input');
    const depositAmount = DepositInput.value;

    console.log(depositAmount);

    const deposiTotal = document.getElementById('deposit-total');

    deposiTotal.innerText = depositAmount;


    // clear the deposit input field

    DepositInput.value = '';


})
