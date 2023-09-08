

function checkingBalance(){
    const balance  = document.getElementById('balance');
const income  = document.getElementById('income');
const expence  = document.getElementById('expence');
    let profit = income.value - expence.value; 
    balance.value = profit;
}