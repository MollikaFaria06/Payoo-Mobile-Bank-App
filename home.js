const validPin = 1234;
// Add Money Feature
document.getElementById('add-money').addEventListener('click',function(e){
    e.preventDefault(); 
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


// Cashout Money Feature

document.getElementById("withdraw-btn").addEventListener("click",function(e){
    e.preventDefault();

    const agentNumber =  document.getElementById("agent-number").value ;
   
    const amount = parseInt(document.getElementById("withdraw-amount").value);

     const pin =  parseInt(document.getElementById("cash-out-pin").value) ;

    const availableBalance = parseInt(document.getElementById("available-balance").innerText);

    
    if(agentNumber.length < 11){
        alert("Please Provide Valid Agent Number");
        return;
    }


    if(pin !== validPin){
        alert("Please Provide Valid Pin Number");
        return;
    }

    const totalNewAvailableBalance = availableBalance - amount;

    document.getElementById("available-balance").innerText = totalNewAvailableBalance;
})








// Toggling Feature

document.getElementById("add-button").addEventListener("click",function(){
    document.getElementById("cash-out-parent").style.display = "none";
    document.getElementById('add-money-parent').style.display = "block";
})

document.getElementById("cash-out-button").addEventListener("click",function(){
    document.getElementById('add-money-parent').style.display = "none";
    document.getElementById("cash-out-parent").style.display = "block";
    
})

//