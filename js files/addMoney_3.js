


// document.getElementById("donation-btn-3").addEventListener("click",function(){
   


//     const amount1 = document.getElementById("amount-3").value.trim()
//     if(amount1.length == 0){
//         alert("plaese Input amount")
//         return
//        }

//     const money =  document.getElementById("amount-3").value
//     if(isNaN(money) ||money[0] === "-") {
//         alert("Invalid input")
//         return
//     }

    
  
//     const amountA = getInputValueByid("amount-3");
//     const balanceMain = getElementInnertextByid("main-balance");
//     const balance1 = getElementInnertextByid("balance-3");

//     if(amountA > balanceMain){
//         alert("Invalid input")
//         return
 
//     }

    
//     if(balanceMain === 0){
//         alert("Sorry Your Late!")
//         return
//     }
//     const newBalance2 = balanceMain - amountA;
//     document.getElementById("main-balance").innerText = newBalance2;
   
//     const newBalance1 = amountA + balance1;
//     document.getElementById("balance-3").innerText = newBalance1;

    
//     const dateInBangladesh = new Date();
//     const div = document.createElement('div');
//     div.classList.add('border', 'rounded-xl' ,'p-4' ,'flex','flex-col' ,'gap-2','mx-2','lg:mx-0')

//     div.innerHTML = ` <h1 class="text-sm lg:text-xl  font-bold">${amountA} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh </h1>
//         <small class="pl-0 lg:pl-5 py-2 rounded bg-[#f3f3f3]"> ${dateInBangladesh} </small>`

//     document.getElementById("hitory-section").appendChild(div)

//     const modal_get = my_modal_5.showModal()
// })





document.getElementById("donation-btn-3").addEventListener("click",function(){
   
   


    const amount1k = document.getElementById("amount-3").value.trim()
    if(amount1k.length == 0){
        alert("plaese Input amount")
        return
       }

    const moneyk =  document.getElementById("amount-3").value
    if(isNaN(moneyk) ||moneyk[0] === "-") {
        alert("Invalid input")
        return
    }

    const amountAk = getInputValueByid("amount-3");
    const balanceMaink = getElementInnertextByid("main-balance");
    const balance1k = getElementInnertextByid("balance-3");

    if(amountAk > balanceMaink){
        alert("Invalid input")
        return
 
    }
    if(balanceMaink === 0){
        alert("Sorry Your Late!")
        return
    }
    const newBalance2k = balanceMaink - amountAk;
    document.getElementById("main-balance").innerText = newBalance2k;
   
    const newBalance1k = amountAk + balance1k;
    document.getElementById("balance-3").innerText = newBalance1k;

    
    const dateInBangladeshk = new Date();
    const divk = document.createElement('div');
    divk.classList.add('border', 'rounded-xl' ,'p-4' ,'flex','flex-col' ,'gap-2','mx-2','lg:mx-0')

    divk.innerHTML = ` <h1 class="text-sm lg:text-xl  font-bold">${amountAk}  Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh </h1>
        <small class="pl-0 lg:pl-5 py-2 rounded bg-[#f3f3f3]"> ${dateInBangladeshk} </small>`

    document.getElementById("hitory-section").appendChild(divk)

    
})


