document.getElementById("history-btn").addEventListener("click",function(){

  

    const step_4 = document.getElementById("history-btn").classList.add("hover:bg-lime-200","bg-lime-300")
    const step_5 = document.getElementById("donation-btn").classList.remove("hover:bg-lime-200","bg-lime-300")
    const transactionSection =  getHiddenByid ("hitory-section")
    
    
    
    

   



})


document.getElementById("donation-btn").addEventListener("click",function(){

    const step_7 = document.getElementById("history-btn").classList.remove("hover:bg-lime-200","bg-lime-300")
    const step_8 = document.getElementById("donation-btn").classList.add("hover:bg-lime-200","bg-lime-300")
   
    const donationSection =  getHiddenByid ("main-section");
    


})
document.getElementById("blog-btn")?.addEventListener("click",function(){

window.location.href ='/faq.html'

    


})


document.getElementById("home-btn")?.addEventListener("click",function(){


    window.location.href =' /index.html'
})
