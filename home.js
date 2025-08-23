const validPin = 1234;

document.getElementById('add-money').addEventListener('click',function(e){
    e.preventDefault();
    console.log('add money btn clicked');
    const bank = document.getElementById('bank').value ;
    const accountNumber =  document.getElementById('account-number').value ;
    const amount = parseInt(document.getElementById('add-amount').value);

    const pin =  parseInt(document.getElementById('add-pin').value) ;

    const availableBalance = parseInt(document.getElementById('available-balance').innerText);

    

    if(accountNumber.length < 11){
        alert("Please Provide Valid Account Number");
        return;
    }


    if(pin !== validPin){
        alert("Please Provide Valid Pin Number");
        return;
    }

    const totalNewAvailableBalance = amount + availableBalance;

    document.getElementById('available-balance').innerText = totalNewAvailableBalance;

})