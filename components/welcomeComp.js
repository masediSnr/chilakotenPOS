import { showElement } from "../utils/sellpoint.js"
import { navigateTo } from "../utils/userHeadline.js"
export let user = {
    username:"Guest",
    key:"",
    role: "customer"
}
document.addEventListener("HTMLLoaded",()=>{
    let username = document.querySelector("#wusername")
    let customerLoginBtn = document.querySelector("#cstmrLogin")
    
    username && username.addEventListener("keyup",(e)=>{
        showElement(".mini-modal",false)
        if(username.value.length>2) {
            showElement(".mini-modal")
            customerLoginBtn.innerHTML="PROCEED"
            user.username = username.value
        }else{
            customerLoginBtn.innerHTML="SKIP"
        }
    })

    let form = document.getElementById("userLogger")
    form.onsubmit= async (e)=>{
        e.preventDefault()
        let loggerData = new FormData(form)
        console.log(loggerData.get("password"));
        
        if (loggerData.get("password") !="") {
            user.role = "cashier"
            
        }
        history.pushState({},"","/products/views")
        await navigateTo(location.pathname)
        

    }
})