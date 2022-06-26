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

// handle withdrow

document.getElementById('withdraw-button').addEventListener('click', function () {


    const withdrowinput = document.getElementById('withdraw-input');
    const withdrowAmountText = withdrowinput.value;
    const newWithdrowAmount = parseFloat(withdrowAmountText);
    console.log(newWithdrowAmount);



    // set withdrow total


    const WithdrawTotal = document.getElementById('withdraw-Total');
    const PreviousWithdrawText = WithdrawTotal.innerText;
    const PreviousWithdrawtotal = parseFloat(PreviousWithdrawText);

    const newWithdrawTotal = PreviousWithdrawtotal + newWithdrowAmount;

    WithdrawTotal.innerText = newWithdrawTotal;


    // update balance

    const balanceTotal = document.getElementById('balance-total');

    const previousBalanceTotaltext = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotaltext);
    const newBalanceTotal = previousBalanceTotal - newWithdrowAmount;
    balanceTotal.innerText = newBalanceTotal;
    withdrowinput.value = '';


})