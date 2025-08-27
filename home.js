const validPin = 1234;


// functions to get input values
function getInputValueNumber(id){
    const inputField = document.getElementById(id);
    const inputFieldValue = inputField.value;
    const inputFieldValueNumber = parseInt(inputFieldValue);
    return inputFieldValueNumber;
}


function getInputValue (id){
    const inputField = document.getElementById(id);
    const inputFieldValue = inputField.value;
    return inputFieldValue;
}



// function to get innerText
function getInnerText(id){
    const element = document.getElementById(id);
    const elementValue = element.innerText;
    const elementValueNumber = parseInt(elementValue);
    return elementValueNumber;
}



// function to set innerText
function setInnerText(value){
    const availableBalanceElement = document.getElementById("available-balance");
    availableBalanceElement.innerText = value;
}


// Add Money Feature
document.getElementById('add-money').addEventListener('click',function(e){
    e.preventDefault(); 
    const bank = getInputValue("bank");

    const accountNumber = getInputValue("account-number");

    const amount = getInputValueNumber("add-amount");

    const pin = getInputValueNumber("add-pin");

    const availableBalance = getInnerText("available-balance");

    

    if(accountNumber.length < 11){
        alert("Please Provide Valid Account Number");
        return;
    }


    if(pin !== validPin){
        alert("Please Provide Valid Pin Number");
        return;
    }

    const totalNewAvailableBalance = amount + availableBalance;

    setInnerText(totalNewAvailableBalance);

})


// Cashout Money Feature

document.getElementById("withdraw-btn").addEventListener("click",function(e){
    e.preventDefault();

    const agentNumber = getInputValue("agent-number");
   
    const amount = getInputValueNumber("withdraw-amount");

     const pin = getInputValueNumber("cash-out-pin");

    const availableBalance = getInnerText("available-balance");

    
    if(agentNumber.length < 11){
        alert("Please Provide Valid Agent Number");
        return;
    }


    if(pin !== validPin){
        alert("Please Provide Valid Pin Number");
        return;
    }

    const totalNewAvailableBalance = availableBalance - amount;

    setInnerText(totalNewAvailableBalance);
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