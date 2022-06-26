document.getElementById('deposit-button').addEventListener('click', function () {

    // get the amount deposited
    const DepositInput = document.getElementById('deposit-input');
    const newdepositAmounttext = DepositInput.value;

    const newdepositAmount = parseFloat(newdepositAmounttext);

    // update deposit total

    const deposiTotal = document.getElementById('deposit-total');

    const PreciousDeposittext = deposiTotal.innerText;
    const previousDepositAmount = parseFloat(PreciousDeposittext);
    const NewDepositTotal = previousDepositAmount + newdepositAmount;

    deposiTotal.innerText = NewDepositTotal;




    // update account balance 


    const balanceTotal = document.getElementById('balance-total');

    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previousBalanceTotal + newdepositAmount;
    balanceTotal.innerText = newBalanceTotal;


    // clear the deposit input field

    DepositInput.value = '';


})
