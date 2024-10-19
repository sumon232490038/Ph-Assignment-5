document.getElementById("donation-btn-3").addEventListener("click",function(event){
    event.preventDefault()


    const amount1 = document.getElementById("amount-3").value.trim()
    if(amount1.length == 0){
        alert("plaese Input amount")
        return
       }
    const money =  document.getElementById("amount-3").value
    if(isNaN(money)) {
        alert("Invalid input")
        return
    }
  
    const amountA = getInputValueByid("amount-3");
    const balanceMain = getElementInnertextByid("main-balance");
    const balance1 = getElementInnertextByid("balance-3");

    const newBalance2 = balanceMain - amountA;
    document.getElementById("main-balance").innerText = newBalance2;
   
    const newBalance1 = amountA + balance1;
    document.getElementById("balance-3").innerText = newBalance1;

    const dateInBangladesh = new Date();
    const div = document.createElement('div');
    div.classList.add('border', 'rounded-xl' ,'p-4' ,'flex','flex-col' ,'gap-2','mx-2','lg:mx-0')

    div.innerHTML = ` <h1 class="text-sm lg:text-xl  font-bold">${amount1} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh </h1>
        <small class="pl-0 lg:pl-5 py-2 rounded bg-[#f3f3f3]"> ${dateInBangladesh} </small>`

    document.getElementById("hitory-section").appendChild(div)
})